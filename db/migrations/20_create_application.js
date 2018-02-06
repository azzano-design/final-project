
exports.up = function(knex, Promise) {
  return knex.schema.createTable('applications', function(table) {
    table.increments('id');
    table.integer('applicant_id').unsigned();
    table.foreign('applicant_id').references('id').inTable('users');
    table.integer('room_id').unsigned();
    table.foreign('room_id').references('id').inTable('rooms');
    table.date('start_date').notNullable();
    table.string('statusApplication').defaultTo('pending');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('applications');
};
