
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.text('name')
      table.number('year')
      table.text('make')
      table.text('model')
      table.text('submodel').defaultsTo(null)
      table.text('drive_layout')
      table.text('color')
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars')
};
