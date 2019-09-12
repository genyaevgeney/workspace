let rows = [];
for (let i = 1; i <= 50; i++) {
  rows.push({
    volunteer_name: `testName${i}`,
    email: `test${i}@gmail.com`,
    amount: 4 * i,
    message: `testMessage${i}`,
    date: new Date(2019, 8, 12, 2, i)
  });
}

exports.seed = async function seed(knex) {
  await knex('donations').insert(rows);
};
