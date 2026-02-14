import { gql } from "apollo-server-express";

export const authMutation = gql`
 extend   type Mutation {
    signup(
      email: String!
      name: String
      password: String!
      role: Role!
    ): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    logout: Boolean!
  }
`;
