const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "DonatingPlatform",
	password: "password"
});

exports.mysqlConnect = () => {
	connection.connect((err) => {
		if (err) {
			return console.error("Error: " + err.message);
		}
		else{
			console.log("Connection to MySQL server successfully established");
		}
	});
}
