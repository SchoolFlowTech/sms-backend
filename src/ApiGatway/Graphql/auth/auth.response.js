import { gql } from 'apollo-server-express';

export const authResponse = gql`
    type authResponse {
        status: String!
        message: String!
        data: AuthPayload
    } 
`