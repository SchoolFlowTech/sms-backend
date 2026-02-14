import { gql } from "apollo-server-express";

export const subjectQuery = gql`
  extend type Query {
    subjects: SubjectsResponse!
    subject(subjectId: Int!): SubjectResponse!
  }
`;
