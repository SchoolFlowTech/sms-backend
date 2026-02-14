import { gql } from "apollo-server-express";

export const userQuery = gql`
   extend   type Query {
        users: UserResponse!
        me: meResponse!
    }

` 