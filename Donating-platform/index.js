const finalhandler = require('finalhandler');
const http = require('http');
const Router = require('router');
const userRouter = require("./routes/userRouter.js");
const router = Router();
const mysql = require('mysql2');
const connection = mysql.createConnection({
	// port:"80",
	host: "localhost",
	user: "root",
	database: "DonatingPlatform",
	password: "password"
});
connection.connect(function(err){
	if (err) {
		return console.error("Ошибка: " + err.message);
	}
	else{
		console.log("Подключение к серверу MySQL успешно установлено");
	}
});

router.use("/",userRouter);

// router.get('/', function (req, res) {
//   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//   res.end('Hello World!')
// })

const server = http.createServer((req, res) => {
	router(req, res, finalhandler(req, res))
});

server.listen(3000);



