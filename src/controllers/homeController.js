// const express = require('express');

// const router = express.Router();
//Better way
const router = require('express').Router();

router.get('/', (req, res) => {
    const cubes = require('../managers/cubeManager').getAll();

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/404', (req, res) => {
    res.render('404');
});
module.exports = router;