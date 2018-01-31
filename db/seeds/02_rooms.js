
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        {
          id: 1,
          landlordId: 1,
          street: '123 main st',
          unit: '32',
          city: 'Vancouver',
          postalCode: 'V5L2T6',
          familyInRoom: false,
          rentAmount: 1000,
          availableDate: '2018/03/01'
        },
        {
          id: 2,
          landlordId: 1,
          street: '321 second st',
          unit: '54',
          city: 'Vancouver',
          postalCode: 'V5L2T6',
          familyInRoom: true,
          rentAmount: 1000,
          availableDate: '2018/03/01'
        },
        {
          id: 3,
          landlordId: 2,
          street: '532 third st',
          unit: '12b',
          city: 'Vancouver',
          postalCode: 'V5L2T6',
          familyInRoom: false,
          rentAmount: 1000,
          availableDate: '2018/01/01'
        },
        {
          id: 4,
          landlordId: 3,
          street: '654 fourth st',
          unit: 'b',
          city: 'Vancouver',
          postalCode: 'V5L2T6',
          familyInRoom: true,
          rentAmount: 1000,
          availableDate: '2018/01/15'
        },
        {
          id: 5,
          landlordId: 3,
          street: '986 fifth st',
          unit: '',
          city: 'Vancouver',
          postalCode: 'V5L2T6',
          familyInRoom: false,
          rentAmount: 1000,
          availableDate: '2018/02/01'
        }
      ]);
    });
};
