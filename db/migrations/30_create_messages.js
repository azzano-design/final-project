
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table){
    table.increments('id');
    table.integer('room_id').unsigned();
    table.foreign('room_id').references('id').inTable('rooms');
    table.integer('sender_id').notNullable();
    table.integer('receiver_id').notNullable();
    table.string('content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};