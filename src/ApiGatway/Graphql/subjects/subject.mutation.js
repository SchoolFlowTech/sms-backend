import { gql } from "apollo-server-express";

export const subjectMutation = gql`
  extend type Mutation {
    createSubject(
      name: String!
      teacherId: Int!
    ): SubjectResponse!

    deleteSubject(subjectId: Int!): SubjectResponse!
  }
`;
