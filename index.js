const database = require("./database/Database.js");
const router = require("./routes/Router.js");
const server = require("./server.js");

database.mysqlConnect();
router.enableRouting();
server.startServer();
