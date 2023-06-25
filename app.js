const express = require('express');
const app = express();
const userRoute = require('./routes/users.route');

app.use("/api/user",userRoute);



app.get('/', (req, res) => {
    res.send('This is home route');
});

module.exports = app;