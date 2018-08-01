const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.listMods().then(mods => {
        response.json({mods});
    }).catch(next);
});

router.get("/:category", (req, res, next) => {
    queries.getModsByCategory(req.params.category)
    .then(mod => {
        mod
        ? res.json({mod})
        : res.status(404).json({message: 'Mod category not found'})
    }).catch(next);
});

router.get("/:category/sum", (req, res, next) => {
    queries.sumModsInCategory(req.params.category, req.params.cost)
    .then(mod => {
        mod
        ? res.json({mod})
        : res.status(404).json({message: 'Mod category not found'})
    }).catch(next);
})