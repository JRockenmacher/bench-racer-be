
exports.up = function(knex, Promise) {
  return knex.schema.createTabe('mods', table => {
      table.increments()
      table.number('brakes').defaultsTo(null)
      table.number('suspension').defaultsTo(null)
      table.number('tire_wheel').defaultsTo(null)
      table.number('intake').defaultsTo(null)
      table.number('exhaust').defaultsTo(null)
      table.number('fuel_system').defaultsTo(null)
      table.number('ignition').defaultsTo(null)
      table.number('cooling').defaultsTo(null)
      table.number('lubrication').defaultsTo(null)
      table.number('top_end').defaultsTo(null)
      table.number('bottom_end').defaultsTo(null)
      table.number('drivetrain').defaultsTo(null)
      table.number('engine_management')
      table.number('engine_swap').defaultsTo(null)
      table.number('force_induction').defaultsTo(null)
      table.number('aero').defaultsTo(null)
      table.number('catch_all').defaultsTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mods')
};  

//how to make arbitrary nested objects/arrays ie mods.cooling[radiator:number(cost)]¸ or mods.cooling.ratiator:number(cost)