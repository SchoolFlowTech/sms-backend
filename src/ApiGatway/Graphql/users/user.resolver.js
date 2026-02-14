import prisma from '../../utils/prismaClient.js';
import { success, failed } from "../../utils/response.js";

export const userResolver = {
    Query: {
        users: async (_parent, _args, context) => {
          if (!context.userId) return failed("Not authenticated");
          const users = prisma.user.findMany();
          return success("All users fetched successfully", users || {} || []);
        },
        me: async (_parent, _args, context) => {
          if (!context.userId) return failed("Not authenticated");
          const me = prisma.user.findUnique({ where: { id: context.userId } });
          return success("User fetched successfully", me);
        }
    }
}