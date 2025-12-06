import { gql } from "apollo-server-express";

export const MutationType = gql`
    type Mutation {
        signup(email: String!, name: String, password: String!, role: Role!): AuthResponse!
        login(email: String!, password: String!): AuthResponse!
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
        ): StudentCreateResponse!

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
        ): StudentCreateResponse!

        deleteStudent(studentId: Int!): Boolean!
  }
`