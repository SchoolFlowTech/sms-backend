import { gql } from "apollo-server-express";

export const studentResponses = gql`
  type StudentCreateResponse {
    status: String!
    message: String!
    data: Student
  }

  type allStudentResponse {
    status: String!
    message: String!
    data: [Student!]
  }

  type getStudentByIdResponse {
    status: String!
    message: String!
    data: Student
  }
`;
