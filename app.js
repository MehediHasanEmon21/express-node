const express = require('express');
const app = express();
const userRoute = require('./routes/users.route');
app.use(express.urlencoded({ extended: true }));


app.use(userRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

module.exports = app;