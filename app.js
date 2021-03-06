const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cadastro.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.listen(3000)