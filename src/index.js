import express from "express";
import cors from "cors";
import server from "./ApiGatway/ApolloServer/apolloServer.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
