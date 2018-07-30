const database = require("./knex-config");

module.exports = {
    listCars(){
        return database('cars')
    },
    createCar(car){
        return database('cars')
        .insert(car)
        .returning('*')
        .then(record => record[0])

        //lookup knex joins query 
    },
    readCar(id){
        // return knex.from('cars')
        return database('cars')
        .innerJoin('mods', 'cars.id', 'mods.car_mod_id' )
        .select()
        .where('id', id)
        .first()
    },
    updateCar(id, car){
        return database('cars')
        .update(car)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteCar(id){
        return database('cars')
        .delete()
        .where('id', id)
    },

    listMods(){
        return database('mods')
    },
    createMod(mod){
        return database('mods')
        .insert(mod)
        .returning('*')
        .then(record => record[0])
    },
    readMod(id){
        return database('mods')
        .select()
        .where('id', id)
        .first()
    },
    updateMod(id, mod){
        return database('mods')
        .update(mod)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteMod(id){
        return database('mods')
        .delete()
        .where('id', id)
    }
};
