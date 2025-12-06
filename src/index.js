import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import typeDefs from "./schema.js";
import context from "./middleware.js";
import resolvers from "./resolver.js";
import { ApolloServer } from "apollo-server-express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const server = new ApolloServer({ typeDefs, resolvers, context });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
