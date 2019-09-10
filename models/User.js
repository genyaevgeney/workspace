const knex = require("../database/Database.js");

module.exports = class User{

    insertDate(date) {
        knex('donations').insert(date).then(() => console.log("data inserted"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });
    }

    // static test() {
    //     const donation = ["name", "email", 32.6, "hi", "1000-01-01 00:00:00"];
    //     const sql = "INSERT INTO donation(volunteer_name, email, amount, message, date) VALUES(?, ?, ?, ?, ?)";

    //     database.connection.query(sql, donation, function(err, results) {
    //         if(err) console.log(err);
    //         else console.log("Данные добавлены");
    //     });//env file, migration, knex.js
    // }

    // static getAll(){
    //     database.connection.query("SELECT * FROM donation",
    //       (err, results, fields) => {
    //         console.log(err);
    //         console.log(results);
    //         console.log(fields); 
    //     });
    //     // database.connection.query("DELETE FROM donation WHERE amount=32.6",
    //     //   (err, results, fields) => {
    //     //     console.log(err);
    //     //     console.log(results);
    //     //     console.log(fields); 
    //     // });
    // }
}
