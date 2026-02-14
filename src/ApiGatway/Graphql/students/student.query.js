import { gql } from "apollo-server-express";

export const studentQuery = gql`
      extend type Query {
        students: allStudentResponse
        student(studentId: Int!): getStudentByIdResponse
    }

`