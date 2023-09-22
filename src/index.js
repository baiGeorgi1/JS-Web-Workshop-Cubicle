const express = require('express');
const PORT = 5000;
const handlebars = require('express-handlebars');

const app = express();

//handlebars setup
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is listeninig on ${PORT}...`));