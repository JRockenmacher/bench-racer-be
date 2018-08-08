const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.listCars().then(cars => {
        response.json({cars});
    }).catch(next);
});

router.get("/mods", (req, res, next) => {
    queries.getCarsWithMods().then(cars => {
        res.json({cars})
    }).catch(next)
})
router.get("/mods/:car_id", (req, res, next) => {
    queries.getModsByCar(req.params.car_id)
    .then(mods => res.json({mods}))
    .catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.readCar(request.params.id).then(car => {
        car
            ? response.json({car})
            : response.status(404).json({message: 'Car not found'})
    }).catch(next);
});


router.post("/", (request, response, next) => {
    console.log(request.body)
    queries.createCar(request.body).then(car => {
        response.status(201).json({car});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.deleteCar(request.params.id).then(() => {
        response.status(200).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    console.log(request.params.id)
    console.log(request.body)
    queries.updateCar(request.params.id, request.body).then(car => {
        response.json({car});
    }).catch(next);
});

module.exports = router;


// const knex = require('../db/knex-config') // TODO: Adjust path as needed!

// // RESTful Knex Router Template:
// const router = module.exports = require('express').Router();

// router.get('/',       getAll)
// router.get('/:id',    getOne)
// router.post('/',      create)
// router.put('/:id',    update)
// router.delete('/:id', remove)

// // TODO: Don't forget data validation/restrictions:
// // - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

// /

// function getAll(req, res, next) {
//   knex('movements')
//     .select('*')
//     .then(movements => res.status(200).send({data: movements}))
//     .catch(next)
// }

// function getOne(req, res, next) {
//   knex('movements')
//     .select('*')
//     .where({id: req.params.id})
//     .then(([item]) => {
//       if (!item) return res.status(404).send({message: 'Movement not found.' })
//       res.status(200).send({data: item})
//     })
//     .catch(next)
// }

// function create(req, res, next) {
//   // TODO: Validate input data
//   knex('movements')
//     .insert(req.body)
//     .then(() => res.status(201).json({ data: req.body }))
//     .catch(next)
// }

// function update(req, res, next) {
//   // TODO: Validate input data
//   knex('movements')
//     .where({id: req.params.id})
//     .update(req.body)
//     .then(count => count >= 1
//       ? res.status(200).json({ data: req.body })
//       : res.status(410).json())
//     .catch(next)
// }

// function remove(req, res, next) {
//   // TODO: Validate authentication
//   knex('movements').where({id: req.params.id})
//     .delete()
//     .then(count => count >= 1
//       ? res.status(204).json()
//       : res.status(404).json({message: 'Nothing deleted!'}))
//     .catch(next)
// }

// // From Dan's Guides: https://github.com/justsml/guides/tree/master/express

// // IMPORTANT: CHECK `TODO` NOTICES BELOW!!!

// // TODO: Import KNEX CONNECTION OBJECT
// const knex = require('../db/knex') // TODO: Adjust path as needed!

// // RESTful Knex Router Template:
// const router = module.exports = require('express').Router();

// router.get('/',       getAll)
// router.get('/:id',    getOne)
// router.post('/',      create)
// router.put('/:id',    update)
// router.delete('/:id', remove)

// // TODO: Don't forget data validation/restrictions:
// // - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

// // OPTIONAL/TODO: Move `getQueryOptions` into some shared js file
// function getQueryOptions(query) {
//   let {offset, limit} = query
//   offset  = parseInt(offset, null)
//   limit   = parseInt(limit, null)
//   offset  = offset > 2000 ? 2000 : offset
//   limit   = limit > 50 ? 50 : limit
//   return {offset, limit}
// }

// function getAll(req, res, next) {
//   const {limit, offset} = getQueryOptions(req.query)
//   knex('items')
//     .select('*')
//     .limit(limit)
//     .offset(offset)
//     .then(items => res.status(200).send({data: items}))
//     .catch(next)
// }

// function getOne(req, res, next) {
//   knex('items')
//     .select('*')
//     .limit(1)
//     .where({id: req.params.id})
//     .then(([item]) => {
//       if (!item) return res.status(404).send({message: 'Item not found.' })
//       res.status(200).send({data: item})
//     })
//     .catch(next)
// }

// function create(req, res, next) {
//   // TODO: Validate input data
//   knex('items')
//     .insert(req.body)
//     .then(() => res.status(201).json({ data: req.body }))
//     .catch(next)
// }

// function update(req, res, next) {
//   // TODO: Validate input data
//   knex('items')
//     .where({id: req.params.id})
//     .update(req.body)
//     .then(count => count >= 1
//       ? res.status(200).json({ data: req.body })
//       : res.status(410).json())
//     .catch(next)
// }

// function remove(req, res, next) {
//   // TODO: Validate authentication
//   knex('items').where({id: req.params.id})
//     .delete()
//     .then(count => count >= 1
//       ? res.status(204).json()
//       : res.status(404).json({message: 'Nothing deleted!'}))
//     .catch(next)
// }