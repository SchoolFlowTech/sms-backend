import { gql } from "apollo-server-express";

export const studentMutation = gql`
   extend type Mutation {
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