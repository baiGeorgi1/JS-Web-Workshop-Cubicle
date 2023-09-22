// const express = require('express');

// const router = express.Router();
//Better way
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});
module.exports = router;