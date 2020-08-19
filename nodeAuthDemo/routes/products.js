const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const result = await Product.find();
        res.send(result);
    }
    catch (error) {
        res.status(400).send("product not found");
    }
});

router.get('/:id', async (req, res) => {
    try {
        const selectedproduct = await Product.findById(req.params.id);
        if (selectedproduct) {
            res.send(selectedproduct);
        }
        else { res.status(404).send("product not found"); }
    }
    catch (error) { res.status(400).send("product not found"); }
});

router.post('/', async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            docs: req.body.docs,
            rating: req.body.rating
        });
        const result = await newProduct.save();
        res.send(result);
    }
    catch (error) {
        res.status(400).send("product not found");
    }

});


router.put('/:id', async (req, res) => {
    try {
        const selectedProduct = await Product.findById(req.params.id);
        if (selectedProduct) {
            selectedProduct.name = req.body.name;
            selectedProduct.price = req.body.price;

            const updatedproduct = await selectedProduct.save();
            res.send(updatedproduct);
        }
        else { res.status(404).send("product not found"); }

    }
    catch (error) { res.status(400).send("product can not be found"); }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.send(deletedProduct);
    }
    catch (error) {
        res.status(404).send("product you selected not found");
    }
});



module.exports = router;