import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

const resolvers = {
  Query: {
    users: async (_parent, _args, context) => {
        console.log("args me aaya:::>",context)
      if (!context.userId) throw new Error("Not authenticated");
      return prisma.users.findMany();
    },
    me: async (_parent, _args, context) => {
      if (!context.userId) throw new Error("Not authenticated");
      return prisma.users.findUnique({ where: { id: context.userId } });
    },
  },
  Mutation: {
    signup: async (_parent, args) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      const user = await prisma.users.create({
        data: {
          email: args.email,
          name: args.name,
          password: hashedPassword,
          role: args.role,
        },
      });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

      return { token, user };
    },
    login: async (_parent, args) => {
      const user = await prisma.users.findUnique({ where: { email: args.email } });
      if (!user) throw new Error("No user found");

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) throw new Error("Incorrect password");

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

      return { token, user };
    },
  },
};

export default resolvers;