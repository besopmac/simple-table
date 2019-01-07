const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen('3000', () => {
    console.log('Servidor OK');
});
