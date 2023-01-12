require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { createServer } = require("http");

const { executeTbl } = require("./database/index");

const app = express();
const PORT = process.env.PORT;
const server = createServer(app);

executeTbl();

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send("Hello World");
  });

server.listen(PORT, () => console.log(`Server has been running in http://localhost:${PORT}`));