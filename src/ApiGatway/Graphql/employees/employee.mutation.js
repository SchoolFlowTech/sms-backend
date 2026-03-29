import { gql } from "apollo-server-express";

export const employeeMutation = gql`
input CreateEmployeeInput {
  firstName: String!
  lastName: String!
  mobileNumber: String!
  address: String!
  joiningDate: String!
  salary: Float
  status: String!
  type: EmployeeType!

  # 🔥 ADD THESE (THIS IS YOUR ISSUE)
  qualification: String
  experience: Int
  gender: String
  dateOfBirth: String
}

  input UpdateEmployeeInput {
    firstName: String
    lastName: String
    mobileNumber: String
    address: String
    joiningDate: String
    salary: Float
    status: String
    type: EmployeeType
  }

  extend type Mutation {
    createEmployee(data: CreateEmployeeInput!): EmployeeResponse!

    updateEmployee(
      employeeId: Int!
      data: UpdateEmployeeInput!
    ): EmployeeResponse!

    deleteEmployee(employeeId: Int!): EmployeeResponse!
  }
`;
