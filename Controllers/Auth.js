
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const utilisateur = require('../Models/user');
require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { Nom, Prénom, age, address, email, Number_phone, password } = req.body;
    
    
    // Check if user exists
    const userExist = await user.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'Utilisateur existe déjà' });
    }

    // Hash the password

console.log(req.body)
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new utilisateur({ Nom, Prénom, age, address, email, Number_phone, password: hashedPassword  });


    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , {expiresIn: "1h"});

    res.status(201).json({ message: 'Utilisateur enregisté avec succès', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const existinguser = await user.findOne({ email });
      if (!existinguser) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, existinguser.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: existinguser._id }, process.env.JWT_SECRET, {expiresIn: "1h"});
  
      res.json({ message: 'Connecté avec succès!', token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  



  

module.exports = router;