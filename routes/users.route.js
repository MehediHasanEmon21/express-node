const express = require('express');
const { getUser, saveUser } = require('../controllers/UserController');
const router = express.Router();

router.get('/user', getUser)

router.post('/user-create', saveUser);


module.exports = router;