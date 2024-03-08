 const mongoose = require('mongoose');

 const user = new mongoose.Schema({
    name: {
         type: String,
         required: true
    },
     age: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true
    }
 });

 const userSchema =  mongoose.model('user', user);
 module.exports = userSchema;
