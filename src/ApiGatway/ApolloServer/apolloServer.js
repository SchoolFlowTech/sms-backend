import { ApolloServer } from "apollo-server-express";
import typeDefs from "../Graphql/index.js";
import context from "../middlerware/middleware.js";
import resolvers from "../Graphql/resolver.js";

const server = new ApolloServer({ typeDefs, resolvers, context });

export default server;