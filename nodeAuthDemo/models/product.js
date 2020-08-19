const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    docs: String,
    rating: String
});
const Product = mongoose.model('product', productSchema);



module.exports = Product;