const data = [{
  id: 1,
  car_id: 1,
  category: 'brakes',
  description: 'lines and pads',
  cost: 200,
}, {
  id: 2,
  car_id: 1,
  category: 'suspension',
  description: 'S14 subframe, sport springs, konis',
  cost: 1500
  },{
  id: 3,
  car_id: 1,
  category: 'tire wheel',
  description: '17x9 RPF1 and 255 width R615K' ,
  cost: 1500
  }, {
  id: 4,
  car_id: 1,
  category: 'intake',
  description: 'plumbing for turbo intake',
  cost: 300
  }, {
  id: 5,
  car_id: 1,
  category: 'exhaust',
  description: 'Turbo manifold and dp back',
  cost: 1500
  }, {
  id: 6,
  car_id: 1,
  category: 'fuel system',
  description: 'injectors and custom line to rail',
  cost: 800
  }, {
  id: 7,
  car_id: 1,
  category: 'ignition',
  description: 'plugs and refresh',
  cost: 300
  },{
    id: 8,
    car_id: 1,
    category:'cooling',
    description: 'radiator, hoses, refresh',
    cost: 800
  }, {
    id: 9,
    car_id: 1,
    category: 'lubrication',
    description: 'oil cooler kit, upgraded pump gear, oil pan baffle',
    cost: 1000
  }, {
    id: 10,
    car_id: 1,
    category: 'top end',
    description: 'stock 3S BEAMS',
    cost: 0
  }, {
    id: 11,
    car_id: 1,
    category: 'bottom end',
    description: 'stock 3S BEAMS',
    cost: 0
  }, {
    id: 12,
    car_id: 1,
    category: 'drivetrain',
    description: '6-speed trans from 3S, OS-Giken lsd, driveshaft mod, shifter mod',
    cost: 2000
  }, {
    id: 13,
    car_id: 1,
    category: 'engine management',
    description: 'Haltech Elite 1500, sensors, tune',
    cost: 2000
  }, {
    id: 14,
    car_id: 1,
    category: 'engine swap',
    description: '3S Beams Blacktop',
    cost: 1200
  }, {
    id: 15,
    car_id: 1,
    category: 'forced induction',
    description: 'GT 3071 turbo and accessories',
    cost: 2500
  }, {
    id: 16,
    car_id: 1,
    category: 'aero',
    description: 'S14 Kouki front end, 180sx X-Type wings and tail-lights',
    cost: 3000
  }, {
    id: 17,
    car_id: 1,
    category: 'catch all',
    description: 'odds and ends',
    cost: 500
  }, {
    id: 18,
    car_id: 2,
    category: 'brakes',
    description: 'Boxster calipers, custom bracket and lines, Elise rotors',
    cost: 1000
  },{
    id: 19,
    car_id: 2,
    category: 'suspension',
    description: 'rebuilt coilovers with bilstein guts, Hux suspension arm kit, quick rack',
    cost: 5000
  }, {
    id: 20,
    car_id: 2,
    category: 'tire wheel',
    description: '15x10 6UL, spacers and 245 BFG Rival-S 1.5',
    cost: 1200
  },{
    id: 21,
    car_id: 2,
    category: 'intake',
    description: 'Custom air-box, surge tank, and 75mm trumpets',
    cost: 1200
  }, {
    id: 22,
    car_id: 2,
    category: 'exhaust',
    description: 'Customer header, header back exhaust',
    cost: 1200
  },{
    id: 23,
    car_id: 2,
    category: 'fuel system',
    description: 'injectors, frp',
    cost: 800
  }, {
    id: 24,
    car_id: 2,
    category: 'ignition',
    description: 'LS-X coils and custom wires',
    cost: 800
  }, {
    id: 25,
    car_id: 2,
  category: 'cooling',
    description: 'Custom radiators and hood vent',
    cost: 800
  }, {
    id: 26,
    car_id: 2,
  category: 'lubrication',
    description: 'dry sump kit, oil cooler kit',
    cost: 4000
  }, {
    id: 27,
    car_id: 2,
    category: 'top end',
    description: 'port and polish, 272 cams and valve train',
    cost: 2000
  },{
    id: 28,
    car_id: 2,
    category: 'bottom end',
    description: 'machine work, crank balance and treatment, custom rods and pistons, block brace, lighter flywheel',
    cost: 2000
  }, {
    id: 29,
    car_id: 2,
    category: 'drivetrain',
    description: 'C60 transmission, OS-Giken lsd, hybrid racing shifter kit, clutch',
    cost: 2000 
  }, {
    id: 30,
    car_id: 2,
    category: 'engine management',
    description: 'Haltech Elite 1500 and tune',
    cost: 2000
  }, {
    id: 31,
    car_id: 2,
    category: 'engine swap',
    description: '4AGE Blacktop head, 7AFE block',
    cost: 400
  }, {
    id: 32,
    car_id: 2,
    category: 'forced induction',
    description: '',
    cost: 0
  }, {
    id: 33,
    car_id: 2,
    category: 'aero',
    description: 'Zebulon wing and diy front splitter',
    cost: 3000
  }, {
    id: 34,
    car_id: 2,
    category: 'catch all',
    description: '',
    cost: 1000
  }, {
    id: 35,
    car_id: 3,
    category: 'brakes',
    description: '911 brakes, RX-8 rotors, custom lines and bracket',
    cost: 1500,
  },{
    id: 36,
    car_id: 3,
    category: 'suspension',
    description: 'rebuilt coilovers with bilstein guts, Hux suspension arm kit, quick rack',
    cost: 5000
  }, {
    id: 37,
    car_id: 3,
    category: 'tire wheel',
    description: '17x10 RFP-1, 255 width R615K',
    cost: 1500
  },{
    id: 38,
    car_id: 3,
  category: 'intake',
    description: 'custom cross-flow intake, twin throttle bodies',
    cost: 1500 
  }, {
    id: 39,
    car_id: 3,
  category: 'exhaust',
    description: 'swap header and custom header-back exhaust',
    cost: 1800 
  }, {
    id: 40,
    car_id: 3,
  category: 'fuel system',
    description: 'injectors and lines',
    cost: 500 
  },{
    id: 41,
    car_id: 3,
  category: 'ignition',
    description: 'plugs and refresh',
    cost: 400
  }, {
    id: 42,
    car_id: 3,
  category: 'cooling',
    description: 'radiator and hood vent',
    cost: 800,
  }, {
    id: 43,
    car_id: 3,
  category: 'lubrication',
    description: 'dry sump and cooler kit',
    cost: 4000 
  }, {
    id: 44,
    car_id: 3,
    category: 'top end',
    description: 'head work, valvetrain, cams',
    cost: 2000
  },{
    id: 45,
    car_id: 3,
    category: 'bottom end',
    description: 'pistons, rods, lightweight flywheel',
    cost: 1500 
  }, {
    id: 46,
    car_id: 3,
    category: 'drivetrain',
    description: 'Lotus 6-Speed conversion, OS-Giken lsd, hybrid racing shifter',
    cost: 2500 
  }, {
    id: 47,
    car_id: 3,
    category: 'engine management',
    description: 'Haltech Elite 1500, sensors, tune',
    cost: 2000
  }, {
    id: 48,
    car_id: 3,
    category: 'engine swap',
    description: '2GR swap',
    cost: 4000 
  }, {
    id: 49,
    car_id: 3,
    category: 'forced induction',
    description: '',
    cost: 0
  }, {
    id: 50,
    car_id: 3,
    category: 'aero',
    description: 'Zebulon wing, fastback engine lid, diy front lip',
    cost: 3500 
  }, {
    id: 51,
    car_id: 3,
    category: 'catch all',
    description: '',
    cost: 1000
},{
    id: 52,
    car_id: 4,
    category: 'brakes',
    description: '911 calipers, Cayman-S rotors, pads and lines',
    cost: 1100 
  },{
    id: 53,
    car_id: 4,
    category: 'suspension',
    description: 'SPB Suspension setup',
    cost: 6000
  }, {
    id: 54,
    car_id: 4,
    category: 'tire wheel',
    description: '18x12 BBS, 285/305 BFG Rival-S',
    cost: 2000
  },{
    id: 55,
    car_id: 4,
  category: 'intake',
    description: 'Basic plumbing to SC',
    cost: 300
  }, {
    id: 56,
    car_id: 4,
    category: 'exhaust',
    description: 'FR swap header, custom header-back',
    cost: 1800
  }, {
    id: 57,
    car_id: 4,
    category: 'fuel system',
    description: 'pump and conversion bits',
    cost: 600
  }, {
    id: 58,
    car_id: 4,
    category: 'ignition',
    description: 'plugs and refresh',
    cost: 300
  }, {
    id: 59,
    car_id: 4,
    category: 'cooling',
    description: 'extra radiator',
    cost: 500,
  }, {
    id: 60,
    car_id: 4,
    category: 'lubrication',
    description: 'dry-sump and cooler kit',
    cost: 4000 
  }, {
    id: 61,
    car_id: 4,
    category: 'top end',
    description: '4P cams and valvetrain, headwork',
    cost: 2000
  },{
    id: 62,
    car_id: 4,
    category: 'bottom end',
    description: 'rods and pistons, balanced crank',
    cost: 2000
  }, {
    id: 63,
    car_id: 4,
    category: 'drivetrain',
    description: 'Porsche 6-speed converted to K24, clutch, lsd',
    cost: 2500 
  }, {
    id: 64,
    car_id: 4,
    category: 'engine management',
    description: 'Hondata, S2K dash, and tune',
    cost: 2500
  }, {
    id: 65,
    car_id: 4,
    category: 'engine swap',
    description: 'K24A2',
    cost: 3000
  }, {
    id: 66,
    car_id: 4,
    category: 'forced induction',
    description: 'Merc Racing TVS 1900 w/ aftercooler',
    cost: 4000
  }, {
    id: 67,
    car_id: 4,
    category: 'aero',
    description: 'GT3 front bumper and hood vent, Zebulon wing, misc. aero',
    cost: 3500
  }, {
    id: 68,
    car_id: 4,
    category: 'catch all',
    description: '',
    cost: 2500
}, 
{
    id: 69,
    car_id: 5,
    category: 'brakes',
    description: 'custom boxster kit',
    cost: 800
  }, {
    id: 70,
    car_id: 5,
    category: 'suspension',
    description: 'Koni/H&R',
    cost: 1000 
  }, {
    id: 71,
    car_id: 5,
    category: 'tire wheel',
    description: '16x8 BBS with 225 R615K',
    cost: 1200 
  },{
    id: 72,
    car_id: 5,
    category: 'intake',
    description: 'custom surge tank and velocity stacks',
    cost: 800
  }, {
    id: 73,
    car_id: 5,
    category: 'exhaust',
    description: 'custom header-back',
    cost: 800
  }, {
    id: 74,
    car_id: 5,
    category: 'fuel system',
    description: '',
    cost: 0 
  }, {
    id: 75,
    car_id: 5,
    category: 'ignition',
    description: 'plugs, refresh',
    cost: 300
  }, {
    id: 76,
    car_id: 5,
    category: 'cooling',
    description: 'radiator and hoses',
    cost: 800,
  }, {
    id: 77,
    car_id: 5,
    category: 'lubrication',
    description: 'oil cooler kit, baffled pan',
    cost: 500
  }, {
    id: 78,
    car_id: 5,
    category: 'top end',
    description: 'cams, headwork',
    cost: 1200 
  },{
    id: 79,
    car_id: 5,
    category: 'bottom end',
    description: 'piston and rod combo, balanced rotating assembly',
    cost: 1200
  },{ 
    id: 80,
    car_id: 5,
    category: 'drivetrain',
    description: 'lsd, clutch' ,
    cost: 1200
  },{
    id: 81,
    car_id: 5,
    category: 'engine management',
    description: 'Haltech Elite 1500 and tune',
    cost: 2000
  },{
    id: 82,
    car_id: 5,
    category: 'engine swap',
    description: '',
    cost: 0
  },{
    id: 83,
    car_id: 5,
    category: 'forced induction',
    description: '',
    cost: 0
  },{
    id: 84,
    car_id: 5,
    category: 'aero',
    description: 'lip and wing',
    cost: 1200
  },{
    id: 85,
    car_id: 5,
    category: 'catch all',
    description: '',
    cost: 100
  },
  {
    id: 86,
    car_id: 6,
    category: 'brakes',
    description: 'Evo bbk upgrade',
    cost: 900
  },{
    id: 87,
    car_id: 6,
    category: 'suspension',
    description: 'Koni/Eibach',
    cost: 1000
  }, {
    id: 88,
    car_id: 6,
    category: 'tire wheel',
    description: '17x10 RPF-1 and 255 R615k',
    cost: 1400
  }, {
    id: 89,
    car_id: 6,
    category: 'intake',
    description: 'basic turbo plumbing',
    cost: 300
  }, {
    id: 90,
    car_id: 6,
    category: 'exhaust',
    description: 'custom header back',
    cost: 1200
  },{
    id: 91,
    car_id: 6,
    category: 'fuel system',
    description: 'basic upgrades to handle power',
    cost: 600
  }, {
    id: 92,
    car_id: 6,
    category: 'ignition',
    description: 'LS-X coils and cusotom wires',
    cost: 800
  }, {
    id: 93,
    car_id: 6,
    category: 'cooling',
    description: 'radiator and hoses',
    cost: 800,
  }, {
    id: 94,
    car_id: 6,
    category: 'lubrication',
    description: 'oil cooler kit, baffle pan',
    cost: 800
  }, {
    id: 95,
    car_id: 6,
    category: 'top end',
    description: 'head work and mild cams',
    cost: 1200
  },{
    id: 96,
    car_id: 6,
    category: 'bottom end',
    description: 'piston and rod combo, machine work',
    cost: 1200
  }, {
    id: 97,
    car_id: 6,
    category: 'drivetrain',
    description: 'clutch, lsd, shifter',
    cost: 1800
  }, {
    id: 98,
    car_id: 6,
    category: 'engine management',
    description: 'evo ecu',
    cost: 800
  }, {
    id: 99,
    car_id: 6,
    category: 'engine swap',
    description: '4G64 FR motor, Evo7 head',
    cost: 2500
  }, {
    id: 100,
    car_id: 6,
    category: 'forced induction',
    description: 'upgraded turbo and lines',
    cost: 2000
  }, {
    id: 101,
    car_id: 6,
    category: 'aero',
    description: 'misc body and spoilers',
    cost: 1000
  }, {
    id: 102,
    car_id: 6,
    category: 'catch all',
    description: '',
    cost: 800
  }
]


exports.seed = function(knex, Promise) {
  return knex('mods').del()
    .then(function () {
      return knex('mods').insert(data)
    })
    .then( () => knex.raw(`ALTER SEQUENCE mods_id_seq RESTART WITH ${data.length + 1};`))
}