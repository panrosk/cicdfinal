// index.js
import express from "express";
import { sayHello } from "./utils";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const result = sayHello("World");
  res.send(result);
});

export const server = app.listen(port);
export default app;
