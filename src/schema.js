import { gql } from "apollo-server-express";

const typeDefs = gql`
  enum Role {
    admin
    student
    teacher
    parent
  }

  type User {
    id: Int!
    email: String!
    name: String
    role: Role!
  }
    
  type Student {
    studentId: Int!
    firstName: String!
    lastName: String!
    gender: String!
    dateOfBirth: String!

    mobileNumber: String!
    address: String!

    class: String!
    section: String!
    rollNumber: String!
    admissionDate: String!
    status: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    me: User
    students: [Student!]!
    student(studentId: Int!): Student
  }

  type Mutation {
    signup(email: String!, name: String, password: String!, role: Role!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createStudent(
      firstName: String!
      lastName: String!
      gender: String!
      dateOfBirth: String!
      mobileNumber: String!
      address: String!
      class: String!
      section: String!
      rollNumber: String!
      admissionDate: String!
      status: String!
    ): Student!

    updateStudent(
      studentId: Int!
      firstName: String!
      lastName: String!
      gender: String!
      dateOfBirth: String!
      mobileNumber: String!
      address: String!
      class: String!
      section: String!
      rollNumber: String!
      admissionDate: String!
      status: String!
    ): Student!

    deleteStudent(studentId: Int!): Boolean!
  }
`;

export default typeDefs;