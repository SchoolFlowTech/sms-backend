import { gql } from "apollo-server-express";

export const QueryType = gql`
    type Query {
        users: UserResponse!
        me: meResponse!
        students: allStudentResponse
        student(studentId: Int!): getStudentByIdResponse
    }

`