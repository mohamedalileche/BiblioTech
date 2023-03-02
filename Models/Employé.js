const User = require('./user');
const mongoose = require('mongoose');

const Employé = User.discriminator('Employé', new mongoose.Schema({}));

module.exports = mongoose.model('Employé'); 