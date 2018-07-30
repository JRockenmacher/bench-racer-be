
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mods', table => {
      table.increments()
      table.json('brakes').defaultsTo(null)
      // have brakes.img, brakes.desc, and brakes.cost: trying in seeds
      // how to make a one to many table to make a car like a user.
      // making default img across all mods: in build out do a consistent img on the fe
      table.json('suspension').defaultsTo(null)
      table.json('tire_wheel').defaultsTo(null)
      table.json('intake').defaultsTo(null)
      table.json('exhaust').defaultsTo(null)
      table.json('fuel_system').defaultsTo(null)
      table.json('ignition').defaultsTo(null)
      table.json('cooling').defaultsTo(null)
      table.json('lubrication').defaultsTo(null)
      table.json('top_end').defaultsTo(null)
      table.json('bottom_end').defaultsTo(null)
      table.json('drivetrain').defaultsTo(null)
      table.json('engine_management').defaultsTo(null)
      table.json('engine_swap').defaultsTo(null)
      table.json('forced_induction').defaultsTo(null)
      table.json('aero').defaultsTo(null)
      table.json('catch_all').defaultsTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mods')
};  

//how to make arbitrary nested objects/arrays ie mods.cooling[radiator:integer(cost)]¸ or mods.cooling.ratiator:number(cost)
//I want each key to have a sub-category of details and price to keep it easy