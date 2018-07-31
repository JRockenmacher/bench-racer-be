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
    },
    readCar(id){  
        return database('cars')
        .innerJoin('mods', 'cars.id', 'mods.car_id' )
        .select()
        .where('cars.id', id)
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

    listModsByCar(car_id){
        return database('mods')
        .select()
        .where('car_id', car_id)
    },
    getModsByCategory(car_id, category){
        return database('mods')
        .select()
        .where('car_id', car_id)
        .andWhere('category', category)
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
        .where('car_id', id)
        
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
    },
    sumModsInCategory(car_id, category, cost) {
        return database('mods')
        .select()
        .where('car_id', car_id)
        .andWhere("category", category)
        .sum('cost', cost)
        .groupBy('category')
    }
}