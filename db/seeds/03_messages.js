
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1000000,
          room_id: 1000002,
          sender_id: 1000000,
          receiver_id: 1000001,
          content: 'Hi'
        },
        {id: 1000001,
          room_id: 1000001,
          sender_id: 1000000,
          receiver_id: 1000001,
          content: 'Hello'
        },
        {id: 1000002,
          room_id: 1000001,
          sender_id: 1000002,
          receiver_id: 100001,
          content: 'Yo'
        }
      ]);
    });
};
