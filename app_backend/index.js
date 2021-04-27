require("dotenv").config(); // Dotenv is a package that makes it easy to use env vars

const server = require("./API/server"); //  express framework server constructor in this import

const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`\n**Succesful runtime on port: ${port}**\n`);
});
