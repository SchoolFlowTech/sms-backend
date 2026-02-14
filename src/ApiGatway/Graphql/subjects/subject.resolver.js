import prisma from "../../utils/prismaClient.js";

export const subjectResolvers = {
  Query: {
    subjects: async (_, __, context) => {
      if (!context.userId) {
        return {
          status: "error",
          message: "Not authenticated",
          data: null,
        };
      }

      const subjects = await prisma.subject.findMany({
        include: { teacher: true },
      });

      return {
        status: "success",
        message: "Subjects fetched successfully",
        data: subjects,
      };
    },

    subject: async (_, { subjectId }, context) => {
      if (!context.userId) {
        return {
          status: "error",
          message: "Not authenticated",
          data: null,
        };
      }

      const subject = await prisma.subject.findUnique({
        where: { subjectId },
        include: { teacher: true },
      });

      if (!subject) {
        return {
          status: "error",
          message: "Subject not found",
          data: null,
        };
      }

      return {
        status: "success",
        message: "Subject fetched successfully",
        data: subject,
      };
    },
  },

  Mutation: {
    createSubject: async (_, args, context) => {
      if (!context.userId) {
        return {
          status: "error",
          message: "Not authenticated",
          data: null,
        };
      }

      const newSubject = await prisma.subject.create({
        data: args,
      });

      return {
        status: "success",
        message: "Subject created successfully",
        data: newSubject,
      };
    },

    deleteSubject: async (_, { subjectId }, context) => {
      if (!context.userId) {
        return {
          status: "error",
          message: "Not authenticated",
          data: null,
        };
      }

      await prisma.subject.delete({
        where: { subjectId },
      });

      return {
        status: "success",
        message: "Subject deleted successfully",
        data: null,
      };
    },
  },
};
