const router = require('express').Router();
//path comming as '/cubes/anyPath

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => { //тук взимаме данни от bodyParser-a
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;