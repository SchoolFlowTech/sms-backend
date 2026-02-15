import prisma from "../../utils/prismaClient.js";
import { success, failed } from "../../utils/response.js";

export const teacherResolvers = {
  Query: {
    teachers: async (_parent, args, context) => {
      try {
        if (!context.userId) return failed("Not authenticated");

        const page = args.page || 1;
        const limit = args.limit || 10;
        const skip = (page - 1) * limit;

        const teachers = await prisma.teacher.findMany({
          skip,
          take: limit,
          orderBy: {
            createdAt: "desc",
          },
        });

        const totalCount = await prisma.teacher.count();

        return {
          status: "success",
          message: "Teachers fetched successfully",
          data: teachers,
          pagination: {
            totalCount,
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            limit,
          },
        };
      } catch (error) {
        return failed(error.message);
      }
    },

    teacher: async (_parent, args, context) => {
      try {
        if (!context.userId) return failed("Not authenticated");

        const teacher = await prisma.teacher.findUnique({
          where: { teacherId: args.teacherId },
        });

        if (!teacher) return failed("Teacher not found");

        return success("Teacher fetched successfully", teacher);
      } catch (error) {
        return failed(error.message);
      }
    },
  },

  Mutation: {
    createTeacher: async (_parent, args, context) => {
      try {
        if (!context.userId) {
          return failed("Not authenticated");
        }

        const newTeacher = await prisma.teacher.create({
          data: {
            ...args,
            dateOfBirth: new Date(args.dateOfBirth),
            joiningDate: new Date(args.joiningDate),
          },
        });

        console.log("Teacher created:", newTeacher);

        return success("Teacher created successfully", newTeacher);
      } catch (error) {
        console.error("CREATE TEACHER ERROR:", error);
        return failed(error.message);
      }
    },

    deleteTeacher: async (_parent, { teacherId }, context) => {
      try {
        if (!context.userId) return failed("Not authenticated");

        await prisma.teacher.delete({
          where: { teacherId },
        });

        return success("Teacher deleted successfully", true);
      } catch (error) {
        return failed(error.message);
      }
    },

    updateTeacher: async (_parent, { teacherId, ...data }, context) => {
      try {
        if (!context.userId) return failed("Not authenticated");

        const updatedTeacher = await prisma.teacher.update({
          where: { teacherId },
          data,
        });

        return success("Teacher updated successfully", updatedTeacher);
      } catch (error) {
        return failed(error.message);
      }
    },
  },
};
