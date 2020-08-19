const express = require('express');
const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();




router.post('/', async (req, res) => {
    try {
        let newUser = await user.findOne({ email: req.body.email });
        if (newUser) { res.status(400).send("invalid email"); }
        else {
            newUser = new user({
                name: req.body.name
                , email: req.body.email
                , password: req.body.password
            });
            const hashed = await bcrypt.hash(newUser.password, 10);
            newUser.password = hashed;
            const savedUser = await newUser.save();
            const token = jwt.sign({ _id: savedUser.id, email: savedUser.email }, 'MG4');
            res.send(token);
            //  res.send({ name: savedUser.name, email: savedUser.email });

        }
    }

    catch (error) { res.status(404).send("this user already exists"); }
});








module.exports = router;
