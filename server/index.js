const express = require('express');
const APP = express();
const PORT = 3000;

APP.all('/', (req, res) => {
    res.status(200).send('Hello Awesome Todos')
});

APP.listen(PORT, () => {
    console.log('starting the app')
});
