const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.listMods().then(mods => {
        response.json({mods});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.readMod(request.params.id).then(mod => {
        mod
            ? response.json({mod})
            : response.status(404).json({message: 'Mod not found'})
    }).catch(next);
});

router.get("/:car_id/:category", (req, res, next) => {
    queries.getModsByCarAndCategory(req.params.car_id, req.params.category)
    .then(mod => {
        mod
        ? res.json({mod})
        : res.status(404).json({message: 'Mod category not found'})
    }).catch(next);
});

// router.get("/:category", (req, res, next) => {
//     queries.getModsByCategory(req.params.category)
//     .then(mod => {
//         mod
//         ? res.json({mod})
//         : res.status(404).json({message: 'Mod category not found'})
//     }).catch(next);
// });

router.get("/:car_id/:category/sum", (req, res, next) => {
    queries.sumModsOfOneInCategory(req.params.car_id, req.params.category, req.params.cost)
    .then(mod => {
        mod
        ? res.json({mod})
        : res.status(404).json({message: 'Mod category not found'})
    }).catch(next);
})

// router.get("/:category/sum", (req, res, next) => {
//     queries.sumModsInCategory(req.params.category, req.params.cost)
//     .then(mod => {
//         mod
//         ? res.json({mod})
//         : res.status(404).json({message: 'Mod category not found'})
//     }).catch(next);
// })

// look up sum and group operators to crunch sums per category and put in queries

router.post("/", (request, response, next) => {
    queries.createMod(request.body).then(mod => {
        response.status(201).json({mod});
    }).catch(next);
});

router.delete(":id", (request, response, next) => {
    queries.deleteMod(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.updateMod(request.params.id, request.body).then(mod => {
        response.json({mod});
    }).catch(next);
});

module.exports = router;


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