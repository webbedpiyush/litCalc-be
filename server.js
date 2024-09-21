const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("the server is listening at port", PORT);
});
