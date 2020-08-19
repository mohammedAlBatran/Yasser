const express = require('express');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/', async (req, res) => {

    const logedUser = await user.findOne({ email: req.body.email });
    if (logedUser) {
        const valipass = await bcrypt.compare(req.body.password, logedUser.password);
        if (valipass) {
            const token = jwt.sign({ _id: logedUser.id, email: logedUser.email }, 'MG4');
            res.send(token);
        }
        else { res.status(400).send("invalid email or password"); }
    }
    else { res.status(400).send("invalid email or password"); }
});

module.exports = router;