const database = require("./database/Database.js");
const router = require("./routes/Router.js");
const server = require("./server.js");

router.enableRouting();
server.startServer();
