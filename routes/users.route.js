const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Login Route');
})

router.get('/register', (req, res) => {
    res.send('Register Route');
})

module.exports = router;