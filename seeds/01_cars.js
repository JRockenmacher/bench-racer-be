
const data = [{
  id: 1,
  name: 'Mako',
  year: 1992,
  make: 'Nissan',
  model: 'S-13',
  sub_model: 'S-14 Sil-Eighty',
  drive_layout: 'FR',
  color: 'battleship-grey',
  car_mod_id: 1
}, {
  id: 2,
  name: 'Scrappy-Dos',
  year: 1988,
  make: 'Toyota',
  model: 'MR2',
  sub_model: 'kouki',
  drive_layout: 'MR',
  color: 'red-panda',
  car_mod_id: 2 
}, {
  id: 3,
  name: 'Huxley',
  year: 1992,
  make: 'Toyota',
  model: 'MR2',
  sub_model: 'Zenki',
  drive_layout: 'MR',
  color: 'smg',
  car_mod_id: 3
}, {
  id: 4,
  name: 'Bekutoru',
  year: 2000,
  make: 'Porsche',
  model: 'Boxster',
  sub_model: '986',
  drive_layout: 'MR',
  color: 'silver',
  car_mod_id: 4
}
,{
  id: 5,
  name: 'Eckmeister',
  year: 1991,
  make: 'BMW',
  model: 'M3',
  sub_model: 'Evo',
  drive_layout: 'FR',
  color: 'red',
  car_mod_id: 5
}, 
{
  id: 6,
  name: 'Lucky',
  year: 1988,
  make: 'Mitsubishi',
  model: 'Starion',
  sub_model: '',
  drive_layout: 'FR',
  color: 'cosmos-black',
  car_mod_id: 6
}, 
// {
//   id: ,
//   name: '',
//   year: ,
//   make: '',
//   model: '',
//   sub_model: '',
//   drive_layout: '',
//   color: '',
// car_mod_id: 
// }
]



exports.seed = function(knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert(data)
    })
    .then( () => knex.raw(`ALTER SEQUENCE cars_id_seq RESTART WITH ${data.length + 1};`))
}