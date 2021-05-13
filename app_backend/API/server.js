const express = require("express");
const middleware = require("./middleware/express.middleware");

const server = express(); // create express appilcation

// call middleware function and pass in server func
middleware(server);

server.use("/", (error, req, res, next) => {
  if (error) {
    res.status(500).json({ message: "An Error Has Occurred", error });
  } else
    res.status(201).json({ message: "Starting a new era of life insurance." });
});

module.exports = server;
