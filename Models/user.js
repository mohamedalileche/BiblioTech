const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    Prénom: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required: true
    },
    address: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true
    },
    Number_phone: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('user', userSchema);