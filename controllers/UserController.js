
const path = require('path');
const users = require('../models/User');

exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/user/add.html'));
}

exports.saveUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(users);
}