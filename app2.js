
const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

app.get('/world', (req, res) => res.send('Hello network!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));