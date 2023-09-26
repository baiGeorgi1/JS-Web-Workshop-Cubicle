const express = require('express');

const PORT = 5000;

const expConfigurator = require('./config/expConfig');
const hbsConfigurator = require('./config/hbsConfig');
const homeConfig = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();
//express config
expConfigurator(app);
//handlebars setup
hbsConfigurator(app);

//Routes
app.use(homeConfig);
app.use('/cubes', cubeController); // if the path starts with (/cubes)
// app.get('*', (req, res) => {
//     res.redirect('/404');
// });

app.listen(PORT, () => console.log(`Server is listeninig on ${PORT}...`));