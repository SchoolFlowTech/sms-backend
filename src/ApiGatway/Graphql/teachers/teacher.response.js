import { gql } from "apollo-server-express";

export const teacherResponse = gql`
  type TeacherResponse {
    status: String!
    message: String!
    data: Teacher
  }

  type TeachersResponse {
    status: String!
    message: String!
    data: [Teacher!]
  }
`;
