import { hashPassword, comparePassword } from "../../../utils/password.js";
import { createToken } from "../../../utils/jwt.js";
import prisma from "../../../utils/prismaClient.js";
import { success, failed } from "../../../utils/response.js";

export const authResolver = {
    Mutation: {
        signup: async (_parent, args) => {
            const hashedPassword = await hashPassword(args.password);

            const user = await prisma.users.create({
                data: {
                    email: args.email,
                    name: args.name,
                    password: hashedPassword,
                    role: args.role,
                },
            });

            const token = createToken(user.id);

            return success("Sign-in Successfully", { token, user });
        },
        login: async (_parent, args) => {
            const user = await prisma.users.findUnique({ where: { email: args.email } });
            if (!user) return failed("No user found");

            const valid = await comparePassword(args.password, user.password);
            if (!valid) return failed("Incorrect password");

            const token = createToken(user.id);

            return success("logged-in Successfully", { token, user });
        }
    }
}