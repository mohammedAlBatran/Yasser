const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String
        , required: true
        , minlength: 3
        , maxlength: 50
    }
    , email: {
        type: String
        , required: true
    }
    , password: {
        type: String
        , required: true
    }

});



const user = mongoose.model("user", userSchema);


module.exports = user;