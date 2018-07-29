
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mods', table => {
      table.increments()
      table.integer('brakes').defaultsTo(null)
      table.integer('suspension').defaultsTo(null)
      table.integer('tire_wheel').defaultsTo(null)
      table.integer('intake').defaultsTo(null)
      table.integer('exhaust').defaultsTo(null)
      table.integer('fuel_system').defaultsTo(null)
      table.integer('ignition').defaultsTo(null)
      table.integer('cooling').defaultsTo(null)
      table.integer('lubrication').defaultsTo(null)
      table.integer('top_end').defaultsTo(null)
      table.integer('bottom_end').defaultsTo(null)
      table.integer('drivetrain').defaultsTo(null)
      table.integer('engine_management').defaultsTo(null)
      table.integer('engine_swap').defaultsTo(null)
      table.integer('forced_induction').defaultsTo(null)
      table.integer('aero').defaultsTo(null)
      table.integer('catch_all').defaultsTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mods')
};  

//how to make arbitrary nested objects/arrays ie mods.cooling[radiator:integer(cost)]¸ or mods.cooling.ratiator:number(cost)
//I want each key to have a sub-category of details and price to keep it easy