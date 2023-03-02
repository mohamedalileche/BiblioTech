const User = require('./user');
const mongoose = require('mongoose');

const Client = User.discriminator('Client', new mongoose.Schema({}));

module.exports = mongoose.model('Client'); 