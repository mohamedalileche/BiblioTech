const express = require("express");
const router = express.Router();
const control = require('../Controllers/EmployéControllers');



// Creer un emprunt
router.post('/Emprunts', control.addEmprunt);

module.exports = router;