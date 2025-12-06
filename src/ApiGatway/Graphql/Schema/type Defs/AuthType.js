import { gql } from "apollo-server-express";

export const AuthType = gql`
    type AuthPayload {
        token: String!
        user: User!
    }
`