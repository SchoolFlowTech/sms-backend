import { gql } from "apollo-server-express";

export const teacherQuery = gql`
  extend type Query {
    teachers(  
    page: Int
    limit: Int
    search: String): TeachersResponse
    teacher(teacherId: Int!): TeacherResponse
  }
`;
