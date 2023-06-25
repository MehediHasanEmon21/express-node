const express = require('express');
const app = express();
const userRoute = require('./routes/users.route');
var bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/api/user",userRoute);

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname+'/views/triangle.html');
});

app.post('/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const area = 1/2 * base * height;
    res.send(`Triangle Area is ${area}`);
});

app.get('/circle', (req, res) => {
    res.sendFile(__dirname+'/views/circle.html');
});

app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const area = 3.1416 * radius * radius;
    res.send(`Circle Area is ${area}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

module.exports = app;