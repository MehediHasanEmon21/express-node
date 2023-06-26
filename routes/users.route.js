const express = require('express');
const { getUser, storeUser, findUser, updateUser, deleteUser } = require('../controllers/UserController');
const router = express.Router();

router.get('/', getUser)
router.post('/', storeUser);
router.get('/:id', findUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;