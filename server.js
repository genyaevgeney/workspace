const finalhandler = require('finalhandler');
const http = require('http');
const router = require("./routes/Router.js");

const server = http.createServer((req, res) => {
	router.getRouter()(req, res, finalhandler(req, res))
});

exports.startServer = () => {
	server.listen(3000);
}
