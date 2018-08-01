
const data = [{
  id: 1,
  name: 'Mako',
  year: 1992,
  make: 'Nissan',
  model: 'S-13',
  sub_model: 'S-14 Sil-Eighty',
  drive_layout: 'FR',
  color: 'battleship-grey',
  image: 'http://www.gotuning.com/images/products/Ings_SilviaS14afterMC_Front.jpg'
  }, {
  id: 2,
  name: 'Scrappy-Dos',
  year: 1988,
  make: 'Toyota',
  model: 'MR2',
  sub_model: 'kouki',
  drive_layout: 'MR',
  color: 'red-panda',
  image: 'https://images.cdn.circlesix.co/image/2/1200/630/5/uploads/posts/2016/04/4fa7a40b1212ab68f65c3f4ee9656a8e.jpeg'
}, {
  id: 3,
  name: 'Huxley',
  year: 1992,
  make: 'Toyota',
  model: 'MR2',
  sub_model: 'Zenki',
  drive_layout: 'MR',
  color: 'smg',
  image: 'https://i.pinimg.com/736x/f9/40/fb/f940fb70a1b99ebd0f120197e4453745--toyota-mr-inspirational.jpg'
  }, {
  id: 4,
  name: 'Bekutoru',
  year: 2000,
  make: 'Porsche',
  model: 'Boxster',
  sub_model: '986',
  drive_layout: 'MR',
  color: 'silver',
  image: 'http://www.tarett.com/images/Tarett%20986%20l.jpg'
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
  image: 'http://grand-army.com/00_files/bmw/livery_m3-side_01.jpg'
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
  image: 'https://images.cdn.circlesix.co/image/2/1200/630/5/uploads/posts/2016/03/215c75a2efa9c2fc875d6ec91c1c3260.jpg'
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
//   image: ''
// }
]



exports.seed = function(knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert(data)
    })
    .then( () => knex.raw(`ALTER SEQUENCE cars_id_seq RESTART WITH ${data.length + 1};`))
}