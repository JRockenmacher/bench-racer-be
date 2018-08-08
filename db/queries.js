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
        // .innerJoin('mods', 'cars.id', 'mods.car_id' )
        .select()
        .where('cars.id', id)
        // .first()
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

    listModsByCar(car_id){
        return database('mods')
        .select()
        .where('car_id', car_id)
    },
    getModsByCarAndCategory(car_id, category){
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
    sumModsOfOneInCategory(car_id, category, cost) {
        return database('mods')
        .select()
        .where('car_id', car_id)
        .andWhere("category", category)
        .sum('cost', cost)
        .groupBy('category')
    },
    getModsByCategory(category){
        return database('mods')
        .select()
        .where('category', category)
    },
    sumModsInCategory(category, cost) {
        return database('mods')
        .select()
        .where("category", category)
        .sum('cost', cost)
        .groupBy('category')
    },
    getCarsWithMods(){
        return database('cars')
           .then(cars => {
               return Promise.all(cars.map(car => {
                    return database('mods')
                       .where('car_id', car.id)
                       .then(mods => {
                           car.modsList = mods
                           console.log("car with mods", car)
                           return car
                       })
               }))
               
           })   
    },
    getModsByCar(car_id){
        return database('mods')
        .where('car_id', car_id)
    }
}