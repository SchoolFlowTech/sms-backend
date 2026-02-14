import { gql } from "apollo-server-express";

export const SubjectType = gql`
  type Subject {
    subjectId: Int!
    name: String!
    teacher: Teacher!
  }
`;
