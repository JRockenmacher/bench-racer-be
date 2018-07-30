
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mods', table => {
      table.increments()
      table.integer('car_id')
      table.string('category')
      table.string('description')
      table.integer('cost')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mods')
};  

//how to make arbitrary nested objects/arrays ie mods.cooling[radiator:integer(cost)]¸ or mods.cooling.ratiator:number(cost)
//I want each key to have a sub-category of details and price to keep it easy