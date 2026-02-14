import { gql } from "apollo-server-express";

export const teacherQuery = gql`
    extend  type Query {
        students: allStudentResponse
        student(studentId: Int!): getStudentByIdResponse
    }

`