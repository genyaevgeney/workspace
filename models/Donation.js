const knex = require("../database/Database.js");

module.exports = class Donation {

    insertData(date) {
        knex('donations').insert(date).then(() => console.log("data inserted"));
    }

    selectDataForPage(perPage, page) {
        return new Promise((resolve, reject) => {
            knex('donations')
            .select('*')
            .limit(perPage)
            .offset((perPage * page) - perPage)
            .then(rows => resolve(rows));
        });
    }

    getNumOfPages(perPage) {
        return new Promise((resolve, reject) => {
           knex('donations')
           .count('id')
           .then(rows => {
             let count = rows[0][Object.keys(rows[0])[0]];
             let pages = Math.ceil(count / perPage);
             resolve(pages);
         });
       });
    }

    getMaxAmount() {
        return new Promise((resolve, reject) => {
            knex('donations')
            .max('amount')
            .then(rows => {
                resolve(rows[0][Object.keys(rows[0])[0]]);
            });
        });
    }

    getTopDonator(maxAmount) {
        return new Promise((resolve, reject) => {
            knex('donations')
            .where({
              amount: maxAmount
            })
            .select('volunteer_name')
            .then(rows => {
                resolve(rows[0][Object.keys(rows[0])[0]]);
            });
        });
    }

    sumAmount() {
        return new Promise((resolve, reject) => {
            knex('donations')
            .sum('amount')
            .then(rows => {
                resolve(rows[0][Object.keys(rows[0])[0]]);
            });
        });
    }

    getAmountForThisMonth() {
        return new Promise((resolve, reject) => {
            knex('donations')
            .sum('amount')
            .whereRaw("MONTH(date) = MONTH(NOW()) AND YEAR(date) = YEAR(NOW())")
            .then(rows => {
                resolve(rows[0][Object.keys(rows[0])[0]]);
            });
        });
    }
}
