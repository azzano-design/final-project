
exports.up = function(knex, Promise) {
  return knex.schema.createTable('applications', function(table) {
    table.increments('id');
    table.integer('landlordId').unsigned();
    table.foreign('landlordId').references('id').inTable('users');
    table.integer('roomId').unsigned();
    table.foreign('roomId').references('id').inTable('rooms');
    table.date('startDate').notNullable();
    table.boolean('monthly');
    table.boolean('weekly');
    table.boolean('biWeekly');
    table.string('other');
    table.date('endDate');
    table.boolean('continue');
    table.boolean('leave');
    table.string('reasonForLeave');
    table.string('rtrNumber');
    table.boolean('addendum');
    table.integer('addendumPages');
    table.string('addendumTerms');
    table.string('statusApplication');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('applications');
};
