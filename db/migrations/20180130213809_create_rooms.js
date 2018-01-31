
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rooms', function(table) {
    table.increments('id');
    table.integer('landlordId').unsigned();
    table.foreign('landlordId').references('id').inTable('users');
    table.string('street').notNullable();
    table.string('unit');
    table.string('city').notNullable();
    table.string('postalCode');
    table.boolean('familyInRoom').notNullable();
    table.integer('rentAmount').notNullable();
    table.integer('depositAmount');
    table.integer('petAmount');
    table.date('availableDate').notNullable();
    table.boolean('water');
    table.boolean('cablevision');
    table.boolean('eletricity');
    table.boolean('internet');
    table.boolean('heat');
    table.boolean('naturalGas');
    table.boolean('sewageDisposal');
    table.boolean('snowRemoval');
    table.boolean('storage');
    table.boolean('recreation');
    table.boolean('garbageCollection');
    table.boolean('recyclingServices');
    table.boolean('kitchenScrapCollection');
    table.boolean('laundryCoin');
    table.boolean('freeLaundry');
    table.boolean('refrigerator');
    table.boolean('dishwasher');
    table.boolean('stoveOven');
    table.boolean('windowCoverings');
    table.boolean('furniture');
    table.boolean('parking');


    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rooms');
};
