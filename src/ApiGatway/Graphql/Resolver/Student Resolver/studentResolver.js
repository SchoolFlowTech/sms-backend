import prisma from "../../../utils/prismaClient.js";
import { validateStudent } from "./validateStudent.js";
import { success, failed } from "../../../utils/response.js";

export const studentResolvers = {
    Query: {
        students: async (_parent, _args, context) => {
            if (!context.userId) return failed("Not authenticated");
            const students = prisma.student.findMany();
            return success("All students fetched successfully", students);
        },
        student: async (_parent, args, context) => {
            if (!context.userId) return failed("Not authenticated");
            const student = prisma.student.findUnique({ where: { studentId: args.studentId } });

            if(!student) return failed("Student not found");

            return success("All students fetched successfully", student);
        },
    },

    Mutation: {
        createStudent: (_, args,context) => {
            if (!context.userId) return failed("Not authenticated");
            const validatedData = validateStudent(args);

            const newStudent = prisma.student.create({
                data: validatedData
            });
            return success("Student created successfully", newStudent || {} || []);
        },
        deleteStudent: async (_, { studentId }, context) => {
            if (!context.userId) throw new Error("Not authenticated");

            await prisma.student.delete({
                where: { studentId },
            });
            
            return true;
        },
        updateStudent: async (_, { studentId, ...data },context) => {
            if (!context.userId) return failed("Not authenticated");
            const validatedData = validateStudent(data);

            const updateStudent = prisma.student.update({
                where: { studentId },
                data: validatedData,
            });

            return success("Student updated successfully", updateStudent || {} || []);
        }

    }
};