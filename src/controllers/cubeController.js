const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

//path comming as '/cubes/anyPath
router.get('/create', (req, res) => {
    console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', (req, res) => { //тук взимаме данни от bodyParser-a
    //console.log(req.body) трябва да запазим данните от парсера в нова папка (manager)
    const {
        name,
        description,
        imageUrl,
        difficulty } = req.body;
    cubeManager.create({
        name,
        description,
        imageUrl,
        difficulty
    });

    res.redirect('/');
});

module.exports = router;