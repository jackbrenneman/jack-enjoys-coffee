/**
 * The top level server file. Runs all servers needed to run the app.
 */
import express from "express";
import path from "path";
import { graphqlHTTP } from "express-graphql";
import jwt from "jsonwebtoken";
import { JackEnjoysCoffeeSchema } from "./src/graphql/schema/schema.js";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import Cookies from "universal-cookie";

config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.listen(process.env.PORT || 3001, async () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${
      process.env.PORT || 3001
    }/graphql`
  );
});

app.use(
  "/graphql",
  graphqlHTTP((req) => {
    const cookies = new Cookies(req.headers.cookie);
    const token = cookies.get("user_token");
    const user = token ? jwt.verify(token, process.env.JWT_SECRET) : {};
    return {
      schema: JackEnjoysCoffeeSchema,
      graphiql: process.env.NODE_ENV === "development",
      context: {
        user: user || {},
        ...req,
      },
    };
  })
);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
