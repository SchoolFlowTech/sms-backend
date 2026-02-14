import prisma from "../../utils/prismaClient.js";
import { validateStudent } from "./validateStudent.js";
import { success, failed } from "../../utils/response.js";

export const studentResolvers = {
  Query: {
    students: async (_parent, _args, context) => {
      console.log("usercontext", context.userId);
      if (!context.userId) return failed("Not authenticated");
      const students = await prisma.student.findMany();
      // console.log("student of student",context);
      return success("All students fetched successfully", students);
    },
    student: async (_parent, args, context) => {
      // console.log("args are here",args)
      if (!context.userId) return failed("Not authenticated");
      const student = await prisma.student.findUnique({
        where: { studentId: args.studentId },
      });

      if (!student) return failed("Student not found");

      return success("All students fetched successfully", student);
    },
  },

  Mutation: {
    createStudent: async (_, args, context) => {
      console.log("context:::::>>>>>", context.userId);
      if (!context.userId) return failed("Not authenticated");
      const validatedData = validateStudent(args);

      const newStudent = await prisma.student.create({
        data: {
          ...validatedData,
          dateOfBirth: new Date(validatedData.dateOfBirth),
          admissionDate: new Date(validatedData.admissionDate),
        },
      });
      return success("Student created successfully", newStudent);
    },
    deleteStudent: async (_, { studentId }, context) => {
      if (!context.userId) throw new Error("Not authenticated");

      await prisma.student.delete({
        where: { studentId },
      });

      return true;
    },
    updateStudent: async (_, { studentId, ...data }, context) => {
      if (!context.userId) throw new Error("Not authenticated");

      const validatedData = validateStudent(data);

      const parseDate = (value) => {
        if (!value) throw new Error("Invalid date format");

        // If timestamp string
        if (!isNaN(value)) {
          return new Date(Number(value));
        }

        // If normal date string
        const date = new Date(value);
        if (isNaN(date.getTime())) {
          throw new Error("Invalid date format");
        }

        return date;
      };

      const updatedStudent = await prisma.student.update({
        where: { studentId },
        data: {
          ...validatedData,
          dateOfBirth: parseDate(validatedData.dateOfBirth),
          admissionDate: parseDate(validatedData.admissionDate),
        },
      });

      return success("Student updated successfully", updatedStudent);
    },
  },
};
