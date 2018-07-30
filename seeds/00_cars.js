
const data = [{
  id: 1,
  name: 'Mako',
  year: 1992,
  make: 'Nissan',
  model: 'S-13',
  sub_model: 'S-14 Sil-Eighty',
  drive_layout: 'FR',
  color: 'battleship-grey'
}, {
  id: 2,
  name: 'Scrappy-Dos',
  year: 1988,
  make: 'Toyota',
  model: 'MR2',
  sub_model: 'kouki',
  drive_layout: 'MR',
  color: 'red-panda' 
}, {
  id: 3,
  name: 'Huxley',
  year: 1992,
  make: 'Toyota',
  model: 'MR2',
  sub_model: 'Zenki',
  drive_layout: 'MR',
  color: 'smg'
}, {
  id: 4,
  name: 'Bekutoru',
  year: 2000,
  make: 'Porsche',
  model: 'Boxster',
  sub_model: '986',
  drive_layout: 'MR',
  color: 'silver'
}
//,{
//   id: 5,
//   name: 'Eckmeister',
//   year: 1991,
//   make: 'BMW',
//   model: 'M3',
//   sub_model: 'Evo',
//   drive_layout: 'FR',
//   color: 'red'
// }, {
//   id: 6,
//   name: 'Lucky',
//   year: 1988,
//   make: 'Mitsubishi',
//   model: 'Starion',
//   sub_model: null,
//   drive_layout: 'FR',
//   color: 'cosmos-black'
// }, 
// {
//   id: ,
//   name: '',
//   year: ,
//   make: '',
//   model: '',
//   sub_model: '',
//   drive_layout: '',
//   color: ''
// }
]



exports.seed = function(knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert(data)
    })
    .then( () => knex.raw(`ALTER SEQUENCE cars_id_seq RESTART WITH ${data.length + 1};`))
}