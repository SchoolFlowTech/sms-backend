import { gql } from "apollo-server-express";

export const teacherMutation = gql`
  extend type Mutation {
    createTeacher(
      userId: Int!
      firstName: String!
      lastName: String!
      gender: String!
      dateOfBirth: String!
      mobileNumber: String!
      address: String!
      qualification: String!
      experience: Int
      joiningDate: String!
      salary: Float
      status: String!
    ): TeacherResponse!

    updateTeacher(
      teacherId: Int!
      firstName: String
      lastName: String
      gender: String
      dateOfBirth: String
      mobileNumber: String
      address: String
      qualification: String
      experience: Int
      joiningDate: String
      salary: Float
      status: String
    ): TeacherResponse!

    deleteTeacher(teacherId: Int!): TeacherResponse!
  }
`;
