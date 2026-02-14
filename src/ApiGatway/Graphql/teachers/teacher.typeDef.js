import { gql } from "apollo-server-express";

export const teacherType = gql`
  type Teacher {
    teacherId: ID!

    # Linked user (login info)
    user: User!

    # Personal Information
    firstName: String!
    lastName: String!
    gender: String!
    dateOfBirth: String!

    # Contact Information
    mobileNumber: String!
    address: String!

    # Professional Information
    qualification: String!
    experience: Int
    salary: Float

    # Employment Details
    joiningDate: String!
    status: String!

    # Relations
    subjects: [Subject!]!

    # System Info
    createdAt: String!
    updatedAt: String!
  }
`;
