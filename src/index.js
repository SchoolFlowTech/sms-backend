import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import server from "./ApiGatway/ApolloServer/apolloServer.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// 🔥 ORDER MATTERS
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,               // allow cookies
  })
);

app.use(express.json());

const PORT = process.env.PORT || 4000;

async function startServer() {
  await server.start();
  server.applyMiddleware({
    app,
    cors: false, // 🔥 IMPORTANT: disable Apollo's internal CORS
  });

  app.listen(PORT, () => {
    console.log(
      `GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
