//Building & Starting a Web Server
//npm install express

require("dotenv").config();
const PORT = 3000;
const express = require("express");
const server = express();
const apiRouter = require("./api");
const morgan = require("morgan");
const { client } = require("./db/index.js");
client.connect();

//Attaching a gernal purpose route

server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
  console.log("<___Body Logger START___>");
  console.log(req.body);
  console.log("<___Body Logger END___>");
  next();
});
server.get("/add/:first/to/:second", (req, res, next) => {
  res.send(
    `<h1>${req.params.first} + ${req.params.second} = ${
      Number(req.params.first) + Number(req.params.second)
    }</h1>`
  );
});

server.get("/posts/:postId", showSinglePostPage);
server.get("/posts/edit", showEditPage);

server.use("./api", apiRouter);

//const appRouter = require('./routes');
//server.use('/app',appRouter)

// start the server
server.listen(PORT, () => {
  console.log("Server is up!");
});
