const app = require('express')();

app.listen('3000', (req, res) => {
    console.log('Servidor OK');
});

app.get('/', (req, res) => {
    res.send(req.query);
});