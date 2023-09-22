const express = require('express');
const PORT = 5000;
const handlebars = require('express-handlebars');
const path = require('path');
const expConfigurator = require('./config/expConfig');
const hbsConfigurator = require('./config/hbsConfig');

const app = express();
//express config
expConfigurator(app);
//handlebars setup
hbsConfigurator(app);

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listeninig on ${PORT}...`));