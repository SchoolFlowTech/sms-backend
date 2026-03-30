import { gql } from "apollo-server-express";

export const teacherType = gql`
type Teacher {
  id: ID!
  employee: Employee
  qualification: String
  experience: Int
  gender: String
  dateOfBirth: String
}
`;