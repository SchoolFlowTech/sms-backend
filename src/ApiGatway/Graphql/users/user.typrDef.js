import { gql } from "apollo-server-express";

export const UserType = gql`
    enum Role {
        admin
        student
        teacher
        parent
    }

    type User {
        id: Int!
        email: String!
        name: String
        role: Role!
    }
`