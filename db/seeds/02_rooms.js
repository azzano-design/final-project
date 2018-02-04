
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        {
          id: 1000000,
          landlord_id: 1000000,
          street: '123 main st',
          unit: '32',
          city: 'Vancouver',
          postal_code: 'V5L2T6',
          rent_amount: 1000,
          available_date: '2018/03/01'
        },
        {
          id: 1000001,
          landlord_id: 1000000,
          street: '321 second st',
          unit: '54',
          city: 'Vancouver',
          postal_code: 'V5L2T6',
          rent_amount: 1000,
          available_date: '2018/03/01'
        },
        {
          id: 1000002,
          landlord_id: 1000001,
          street: '532 third st',
          unit: '12b',
          city: 'Vancouver',
          postal_code: 'V5L2T6',
          rent_amount: 1000,
          available_date: '2018/01/01'
        },
        {
          id: 1000003,
          landlord_id: 1000002,
          street: '654 fourth st',
          unit: 'b',
          city: 'Vancouver',
          postal_code: 'V5L2T6',
          rent_amount: 1000,
          available_date: '2018/01/15'
        },
        {
          id: 1000004,
          landlord_id: 1000002,
          street: '986 fifth st',
          unit: '',
          city: 'Vancouver',
          postal_code: 'V5L2T6',
          rent_amount: 1000,
          available_date: '2018/02/01'
        }
      ]);
    });
};
