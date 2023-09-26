const cubes = require('../managers/cubeManager').getAll();
// const express = require('express');

// const router = express.Router();
//Better way
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log();
    res.render('index', ({ cubes }));
});

router.get('/about', (req, res) => {
    res.render('about');
});
module.exports = router;