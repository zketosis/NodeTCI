const express = require('express');
//Should work.
const app = express();

app.get('/', (req, res) => {
    res.send('ci with travis');
});

const server = app.listen(8080, () => {
    console.log('broken and wrong App running on port 8080');
});

module.exports = server;
