const express = require('express');
const app = express();


require('./config/db');
const userRoute = require('./routes/users.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/user",userRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

module.exports = app;