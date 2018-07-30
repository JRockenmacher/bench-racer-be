const data = [{
  id: 1,
  brakes: {
    description: 'lines and pads',
    cost: 200
  },
  suspension: {
    description: 'S14 subframe, sport springs, konis',
    cost: 1500
  },
  tire_wheel: {
    description: '17x9 RPF1 and 255 width R615K' ,
    cost: 1500
  },
  intake: {
    description: 'plumbing for turbo intake',
    cost: 300
  },
  exhaust: {
    description: 'Turbo manifold and dp back',
    cost: 1500
  },
  fuel_system: {
    description: 'injectors and custom line to rail',
    cost: 800
  },
  ignition: {
    description: 'plugs and refresh',
    cost: 300
  },
  cooling: {
    description: 'radiator, hoses, refresh',
    cost: 800
  },
  lubrication: {
    description: 'oil cooler kit, upgraded pump gear, oil pan baffle',
    cost: 1000
  },
  top_end: {
    description: 'stock 3S BEAMS',
    cost: 0
  },
  bottom_end: {
    description: 'stock 3S BEAMS',
    cost: 0
  },
  drivetrain: {
    description: '6-speed trans from 3S, OS-Giken lsd, driveshaft mod, shifter mod',
    cost: 2000
  },
  engine_management: {
    description: 'Haltech Elite 1500, sensors, tune',
    cost: 2000
  },
  engine_swap: {
    description: '3S Beams Blacktop',
    cost: 1200
  },
  forced_induction: {
    description: 'GT 3071 turbo and accessories',
    cost: 2500
  },
  aero: {
    description: 'S14 Kouki front end, 180sx X-Type wings and tail-lights',
    cost: 3000
  },
  catch_all: {
    description: 'odds and ends',
    cost: 500
  }
}, {
  id: 2,
  brakes: {
    description: 'Boxster calipers, custom bracket and lines, Elise rotors',
    cost: 1000
  },
  suspension: {
    description: 'rebuilt coilovers with bilstein guts, Hux suspension arm kit, quick rack',
    cost: 5000
  },
  tire_wheel: {
    description: '15x10 6UL, spacers and 245 BFG Rival-S 1.5',
    cost: 1200
  },
  intake: {
    description: 'Custom air-box, surge tank, and 75mm trumpets',
    cost: 1200
  },
  exhaust: {
    description: 'Customer header, header back exhaust',
    cost: 1200
  },
  fuel_system: {
    description: 'injectors, frp',
    cost: 800
  },
  ignition: {
    description: 'LS-X coils and custom wires',
    cost: 800
  },
  cooling: {
    description: 'Custom radiators and hood vent',
    cost: 800
  },
  lubrication: {
    description: 'dry sump kit, oil cooler kit',
    cost: 4000
  },
  top_end: {
    description: 'port and polish, 272 cams and valve train',
    cost: 2000
  },
  bottom_end: {
    description: 'machine work, crank balance and treatment, custom rods and pistons, block brace, lighter flywheel',
    cost: 2000
  },
  drivetrain: {
    description: 'C60 transmission, OS-Giken lsd, hybrid racing shifter kit, clutch',
    cost: 2000 
  },
  engine_management: {
    description: 'Haltech Elite 1500 and tune',
    cost: 2000
  },
  engine_swap: {
    description: '4AGE Blacktop head, 7AFE block',
    cost: 400
  },
  forced_induction: {
    description: '',
    cost: 0
  },
  aero: {
    description: 'Zebulon wing and diy front splitter',
    cost: 3000
  },
  catch_all: {
    description: '',
    cost: 1000
  }
}, {
  id: 3,
  brakes: {
    description: '911 brakes, RX-8 rotors, custom lines and bracket',
    cost: 1500,
  },
  suspension: {
    description: 'rebuilt coilovers with bilstein guts, Hux suspension arm kit, quick rack',
    cost: 5000
  },
  tire_wheel: {
    description: '17x10 RFP-1, 255 width R615K',
    cost: 1500
  },
  intake: {
    description: 'custom cross-flow intake, twin throttle bodies',
    cost: 1500 
  },
  exhaust: {
    description: 'swap header and custom header-back exhaust',
    cost: 1800 
  },
  fuel_system: {
    description: 'injectors and lines',
    cost: 500 
  },
  ignition: {
    description: 'plugs and refresh',
    cost: 400
  },
  cooling: {
    description: 'radiator and hood vent',
    cost: 800
  },
  lubrication: {
    description: 'dry sump and cooler kit',
    cost: 4000 
  },
  top_end: {
    description: 'head work, valvetrain, cams',
    cost: 2000
  },
  bottom_end: {
    description: 'pistons, rods, lightweight flywheel',
    cost: 1500 
  },
  drivetrain: {
    description: 'Lotus 6-Speed conversion, OS-Giken lsd, hybrid racing shifter',
    cost: 2500 
  },
  engine_management: {
    description: 'Haltech Elite 1500, sensors, tune',
    cost: 2000
  },
  engine_swap: {
    description: '2GR swap',
    cost: 4000 
  },
  forced_induction: {
    description: '',
    cost:0
  },
  aero: {
    description: 'Zebulon wing, fastback engine lid, diy front lip',
    cost: 3500 
  },
  catch_all: {
    description: '',
    cost: 1000 
  }
},{
  id: 4,
  brakes: {
    description: '911 calipers, Cayman-S rotors, pads and lines',
    cost: 1100 
  },
  suspension: {
    description: 'SPB Suspension setup',
    cost: 6000
  },
  tire_wheel: {
    description: '18x12 BBS, 285/305 BFG Rival-S',
    cost: 2000
  },
  intake: {
    description: 'Basic plumbing to SC',
    cost: 300
  },
  exhaust: {
    description: 'FR swap header, custom header-back',
    cost: 1800
  },
  fuel_system: {
    description: 'pump and conversion bits',
    cost: 600
  },
  ignition: {
    description: 'plugs and refresh',
    cost: 300
  },
  cooling: {
    description: 'extra radiator',
    cost: 500
  },
  lubrication: {
    description: 'dry-sump and cooler kit',
    cost: 4000 
  },
  top_end: {
    description: '4P cams and valvetrain, headwork',
    cost: 2000
  },
  bottom_end: {
    description: 'rods and pistons, balanced crank',
    cost: 2000
  },
  drivetrain: {
    description: 'Porsche 6-speed converted to K24, clutch, lsd',
    cost: 2500 
  },
  engine_management: {
    description: 'Hondata, S2K dash, and tune',
    cost: 2500
  },
  engine_swap: {
    description: 'K24A2',
    cost: 3000
  },
  forced_induction: {
    description: 'Merc Racing TVS 1900 w/ aftercooler',
    cost: 4000 
  },
  aero: {
    description: 'GT3 front bumper and hood vent, Zebulon wing, misc. aero',
    cost: 3500
  },
  catch_all: {
    description: '',
    cost: 2500
  }
}, 
// {
//   id: 5,
//   brakes: {
//     description: 'custom boxster kit',
//     cost: 800
//   },
//   suspension: {
//     description: 'Koni/H&R',
//     cost: 1000 
//   },
//   tire_wheel: {
//     description: '16x8 BBS with 225 R615K',
//     cost: 1200 
//   },
//   intake: {
//     description: 'custom surge tank and velocity stacks',
//     cost: 800
//   },
//   exhaust: {
//     description: 'custom header-back',
//     cost: 800
//   },
//   fuel_system: {
//     description: '',
//     cost: 0 
//   },
//   ignition: {
//     description: 'plugs, refresh',
//     cost: 300
//   },
//   cooling: {
//     description: 'radiator and hoses',
//     cost: 800
//   },
//   lubrication: {
//     description: 'oil cooler kit, baffled pan',
//     cost: 500
//   },
//   top_end: {
//     description: 'cams, headwork',
//     cost: 1200 
//   },
//   bottom_end: {
//     description: '',
//     cost: 1200
//   },
//   drivetrain: 1500,
//   engine_management: 2000,
//   engine_swap: 0,
//   forced_induction: 0,
//   aero: 1000,
//   catch_all: 1000
// }, {
//   id: 6,
//   brakes: 800,
//   suspension: 1000,
//   tire_wheel: 1400,
//   intake: 300,
//   exhaust: 1200,
//   fuel_system: 600,
//   ignition: 800,
//   cooling: 1200,
//   lubrication: 800,
//   top_end: 1200,
//   bottom_end: 1200,
//   drivetrain: 1800,
//   engine_management: 800,
//   engine_swap: 1200,
//   forced_induction: 1400,
//   aero: 800,
//   catch_all: 800
// }, 
// {
//   id: ,
//   brakes: {
//     description: '',
//     cost: 0
//   },
//   suspension: {
//     description: '',
//     cost: 0
//   },
//   tire_wheel: {
//     description: '',
//     cost: 0
//   },
//   intake: {
//     description: '',
//     cost: 0
//   },
//   exhaust: {
//     description: '',
//     cost: 0
//   },
//   fuel_system: {
//     description: '',
//     cost: 0
//   },
//   ignition: {
//     description: '',
//     cost: 0
//   },
//   cooling: {
//     description: '',
//     cost: 0
//   },
//   lubrication: {
//     description: '',
//     cost: 0
//   },
//   top_end: {
//     description: '',
//     cost: 0
//   },
//   bottom_end: {
//     description: '',
//     cost: 0
//   },
//   drivetrain: {
//     description: '',
//     cost: 0
//   },
//   engine_management: {
//     description: '',
//     cost: 0
//   },
//   engine_swap: {
//     description: '',
//     cost: 0
//   },
//   forced_induction: {
//     description: '',
//     cost: 0
//   },
//   aero: {
//     description: '',
//     cost: 0
//   },
//   catch_all: {
//     description: '',
//     cost: 0
//   }
// }, 
// {
// id: ,
// brakes: ,
// suspension: ,
//   tire_wheel: ,
//   intake: ,
//   exhaust: ,
//   fuel_system: ,
//   ignition: ,
//   cooling: ,
//   lubrication: ,
//   top_end: ,
//   bottom_end: ,
//   drivetrain: ,
//   engine_management: ,
//   engine_swap: ,
//   forced_induction: ,
//   aero: ,
//   catch_all: 0
// }
]


exports.seed = function(knex, Promise) {
  return knex('mods').del()
    .then(function () {
      return knex('mods').insert(data)
    })
    .then( () => knex.raw(`ALTER SEQUENCE mods_id_seq RESTART WITH ${data.length + 1};`))
}