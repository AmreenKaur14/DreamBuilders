const express = require('express');
const User = require('../models/user.model.js');
const router = express.Router();
const bcryptjs = require('bcryptjs');

// Define the POST route with a callback function
router.post('/register', async (req, res) => {
    console.log(req.body);
    const {name, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({name, hashPassword});
    try {
        await newUser.save();
        res.status(201).json('USER ADDED HURRY...');
    } catch (error) {
        res.status(500).json(error);
    }
    
    // You can send a response back to the client, for example:
    res.status(200).json({ message: 'Registration successful' })
}
);

module.exports = router;
