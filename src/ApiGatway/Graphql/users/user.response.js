import { gql } from 'apollo-server-express';

export const userResponse = gql`
    type UserResponse {
        status: String!
        message: String!
        data: [User!]
    }

    type meResponse {
        status: String!
        message: String!
        data: User
    }

    `