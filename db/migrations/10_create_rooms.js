
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rooms', function(table) {
    table.increments('id');
    table.integer('landlord_id').unsigned();
    table.foreign('landlord_id').references('id').inTable('users');
    table.string('landlord_email');
    table.string('street').notNullable();
    table.string('unit');
    table.string('city').notNullable();
    table.string('postal_code');
    table.boolean('pet_friendly');
    table.integer('rent_amount').notNullable();
    table.date('available_date').notNullable();
    table.boolean('water');
    table.boolean('eletricity');
    table.boolean('internet');
    table.boolean('heat');
    table.boolean('natural_gas');
    table.boolean('storage');
    table.boolean('laundry_on_site');
    table.boolean('furniture');
    table.boolean('parking');
    table.string('details');
    table.float('lat');
    table.float('lng');
    table.text('file');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rooms');
};
