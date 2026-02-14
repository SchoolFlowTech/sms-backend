import { gql } from "apollo-server-express";

export const subjectResponse = gql`
  type SubjectResponse {
    status: String!
    message: String!
    data: Subject
  }

  type SubjectsResponse {
    status: String!
    message: String!
    data: [Subject!]
  }
`;
