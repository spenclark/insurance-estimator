const express = require("express"); // express framework (need express.json() so server can understand json)
const helmet = require("helmet"); // use of the high-ßlevel function encrypts HTTP headers (low level security)
const cors = require("cors"); // enables Cross-origin resource sharing in node

// express supports arrays into the use func
module.exports = (server) => {
  server.use([helmet(), express.json(), cors()]);
};
