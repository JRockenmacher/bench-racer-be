
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.text('name')
      table.integer('year')
      table.text('make')
      table.text('model')
      table.text('sub_model').defaultsTo('')
      table.text('drive_layout')
      table.text('color').defaultsTo('')
      table.text('image').defaultsTo('Photo Coming Soon')      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars')
};
