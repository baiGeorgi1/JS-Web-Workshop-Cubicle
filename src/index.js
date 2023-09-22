const express = require('express');
const homeConfig = require('./controllers/homeController');

const PORT = 5000;

const expConfigurator = require('./config/expConfig');
const hbsConfigurator = require('./config/hbsConfig');

const app = express();
//express config
expConfigurator(app);
//handlebars setup
hbsConfigurator(app);

//Routes
app.use(homeConfig);


app.listen(PORT, () => console.log(`Server is listeninig on ${PORT}...`));