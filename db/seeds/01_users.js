
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1000000,
          name: 'Arthur Di Lascio',
          email: 'arthur.dilascio@gmail.com',
          phone_number: '6043466637'
        },
        {
          id: 1000001,
          name: 'Brendan Azzano',
          email: 'brendan@gmail.com',
          phone_number: '6046046046'
        },
        {
          id: 1000002,
          name: 'Konrad Kowalski',
          email: 'konrad@gmail.com',
          phone_number: '7787787787'
        },
        {
          id: 1000003,
          name: 'Sen Chen',
          email: 'Sen@gmail.com',
          phone_number: '7787787787'
        },
        {
          id: 1000004,
          name: 'Alex Hill',
          email: 'Chill@gmail.com',
          phone_number: '7787787787'
        },
        {
          id: 1000005,
          name: 'Bruce Callander',
          email: 'Bruce@gmail.com',
          phone_number: '7787787787'
        }

      ]);
    });
};
