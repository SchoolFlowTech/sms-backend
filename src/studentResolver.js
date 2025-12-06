import { PrismaClient } from "@prisma/client";
import { validateStudent } from "./validateStudent.js";

const prisma = new PrismaClient(); 

export const studentResolvers = {
    Query: {
        students: async (_parent, _args, context) => {
            if (!context.userId) throw new Error("Not authenticated");
            return prisma.student.findMany();
        },
        student: async (_parent, args, context) => {
            if (!context.userId) throw new Error("Not authenticated");
            return prisma.student.findUnique({ where: { studentId: args.studentId } });
        },
    },

    Mutation: {
        createStudent: (_, args,context) => {
            if (!context.userId) throw new Error("Not authenticated");
            const validatedData = validateStudent(args);

            return prisma.student.create({
                data: validatedData
            });
        },
        deleteStudent: async (_, { studentId }, context) => {
            if (!context.userId) throw new Error("Not authenticated");

            await prisma.student.delete({
                where: { studentId },
            });

            return true;
        },
        updateStudent: async (_, { studentId, ...data },context) => {
            if (!context.userId) throw new Error("Not authenticated");
            const validatedData = validateStudent(data);

            return prisma.student.update({
                where: { studentId },
                data: validatedData,
            });
        }

    }
};