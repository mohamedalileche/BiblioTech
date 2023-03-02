const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../Models/user');
require('dotenv').config();
const authControl = require('../Controllers/Auth');


const router = express.Router();

router.post('/register', authControl.registeration);




router.post('/loggin', authControl.logging);


module.exports = router;