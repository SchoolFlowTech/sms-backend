import { gql } from "apollo-server-express";

export const StudentType = gql`
    type Student {
        studentId: Int!
        firstName: String!
        lastName: String!
        gender: String!
        dateOfBirth: String!

        mobileNumber: String!
        address: String!

        className: String!
        section: String!
        rollNumber: String!
        admissionDate: String!
        status: String!
    }
`