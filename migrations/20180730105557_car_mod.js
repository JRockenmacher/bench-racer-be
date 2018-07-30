exports.up = function(knex, Promise) {
    return knex.schema.alterTable('cars', table => {
        table.integer('car_mod_id').notNullable()  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.alterTable('cars', table => {
        table.dropColumn('car_mod_id')
    })
}
  