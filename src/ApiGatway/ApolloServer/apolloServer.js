import { ApolloServer } from "apollo-server-express";
import typeDefs from "../Graphql/Schema/SchemaIndex.js";
import context from "../middlerware/middleware.js";
import resolvers from "../Graphql/Resolver/resolver.js";

const server = new ApolloServer({ typeDefs, resolvers, context });

export default server;