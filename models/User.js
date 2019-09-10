const database = require("../database/Database.js");

module.exports = class User{

    static test() {
        const donation = ["name", "email", 32.6, "hi", "1000-01-01 00:00:00"];
        const sql = "INSERT INTO donation(volunteer_name, email, amount, message, date) VALUES(?, ?, ?, ?, ?)";

        database.connection.query(sql, donation, function(err, results) {
            if(err) console.log(err);
            else console.log("Данные добавлены");
        });
    }

    static getAll(){
        // database.connection.query("SELECT * FROM donation",
        //   (err, results, fields) => {
        //     console.log(err);
        //     console.log(results);
        //     console.log(fields); 
        // });
        // database.connection.query("DELETE FROM donation WHERE amount=32.6",
        //   (err, results, fields) => {
        //     console.log(err);
        //     console.log(results);
        //     console.log(fields); 
        // });
    }
}
