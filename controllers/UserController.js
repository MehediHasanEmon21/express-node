const { v4: uuidv4 } = require("uuid");
const path = require('path');
const User = require("../models/User");

const getUser = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            message: 'User found successfully',
            data: users
        });
    }catch(err){
        res.status(500).send(err.message);
    }
    
}

const storeUser = async (req, res) => {
    try{
        const newUser = new User({
            id: uuidv4(),
            ...req.body
          });
        await newUser.save();
        res.status(201).json({
            message: 'User create successfully',
            data: newUser
        });

    }catch(err){
        res.status(500).send(err.message);
    }
    
}

const findUser = async (req, res) => {
    try{
        const user =  await User.findOne({ id: req.params.id });
        res.status(201).json({
            message: 'User find successfully',
            data: user
        });

    }catch(err){
        res.status(500).send(err.message);
    }
    
}

const updateUser = async (req, res) => {
    try{
        const user = await User.findOne({ id: req.params.id });
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(201).json({
            message: 'User updated successfully',
            data: user
        });

    }catch(err){
        res.status(500).send(err.message);
    }
    
}

const deleteUser = async (req, res) => {
    try{
        const user = await User.deleteOne({ id: req.params.id });
        res.status(201).json({
            message: 'User deleted successfully',
            data: user
        });

    }catch(err){
        res.status(500).send(err.message);
    }
    
}

module.exports = {
    getUser,
    storeUser,
    findUser,
    updateUser,
    deleteUser
}