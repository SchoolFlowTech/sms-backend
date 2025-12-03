import { gql } from "apollo-server-express";

const typeDefs = gql`
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

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    me: User
  }

  type Mutation {
    signup(email: String!, name: String, password: String!, role: Role!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;

export default typeDefs;