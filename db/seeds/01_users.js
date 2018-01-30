
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'Arthur', lastName:'Di Lascio', email:'arthur.dilascio@gmail.com', phone_number:'6043466637'},
        {id: 2, firstName: 'Brendan', lastName:'Azzano', email:'brendan@gmail.com', phone_number:'6046046046'},
        {id: 3, firstName: 'Konrad', lastName:'Kowalski', email:'konrad@gmail.com', phone_number:'7787787787'}
      ]);
    });
};
