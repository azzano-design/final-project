
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('rooms').insert([
        {
          id: 1000000,
          landlord_id: 1000000,
          street: '2315 Brunswick St',
          city: 'Vancouver',
          rent_amount: 1000,
          available_date: '2018/03/01',
          lat: 49.264254,
          lng: -123.097665
        },
        {
          id: 1000001,
          landlord_id: 1000000,
          street: 'Mount Pleasant',
          city: 'Vancouver',
          rent_amount: 1000,
          available_date: '2018/03/01',
          lng: -123.104124,
          lat: 49.266416
        },
        {
          id: 1000002,
          landlord_id: 1000001,
          street: 'Downtown Vancouver',
          city: 'Vancouver',
          rent_amount: 1000,
          available_date: '2018/01/01',
          lng: -123.117943,
          lat: 49.278747
        },
        {
          id: 1000003,
          landlord_id: 1000002,
          street: 'EB Beach Ave FS Hornby St',
          city: 'Vancouver',
          rent_amount: 1000,
          available_date: '2018/01/15',
          lng: -123.132362,
          lat: 49.275147
        },
        {
          id: 1000004,
          landlord_id: 1000002,
          street: '128 west hastings st',
          city: 'Vancouver',
          rent_amount: 1000,
          available_date: '2018/02/01',
          lat: 49.28184419999999,
          lng: -123.10816169999998
        }
      ]);
    });
};
