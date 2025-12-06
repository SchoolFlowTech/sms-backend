import { gql } from 'apollo-server-express';

export const responses = gql`
    type UserResponse {
        status: String!
        message: String!
        data: [User!]
    }

    type AuthResponse {
        status: String!
        message: String!
        data: AuthPayload
    }

    type meResponse {
        status: String!
        message: String!
        data: User
    }

    type StudentCreateResponse {
        status: String!
        message: String!
        data: Student
    }

    type allStudentResponse{
        status: String!
        message: String!
        data: [Student!]
    }

    type getStudentByIdResponse{
        status: String!
        message: String!
        data: Student
    }
    
`