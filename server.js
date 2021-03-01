"use strict";

const express = require("express");
const app = express();

const VERSION = 2;

app.get("/", (req, res) => {
  res.send(`Current version: ${VERSION}`);
});

// /greet?name=Joe
app.get("/greet", (req, res) => {
  const name = req.query.name;

  res.send(`Hello, ${name}!`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
