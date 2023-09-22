const express = require('express');
const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(PORT, () => console.log(`Server is listeninig on ${PORT}...`));