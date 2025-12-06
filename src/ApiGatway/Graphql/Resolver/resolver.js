import { studentResolvers } from "./Student Resolver/studentResolver.js";
import { authResolver } from "./Auth Resolver/authResolver.js";
import { userResolver } from "./User Resolver/userResolver.js";

const resolvers = {
  Query: {
    ...authResolver.Query,
    ...userResolver.Query,
    ...studentResolvers.Query
  },
  Mutation: {
    ...authResolver.Mutation,
    ...userResolver.Mutation,
    ...studentResolvers.Mutation
  },
};

export default resolvers;