const express = require('express');
const router = express.Router();

const Livres = require('./Livres');
const Categories = require('./Categories');
const Emprunts = require('./Emprunts')

router.use('/Livres', Livres);
router.use('/Categories', Categories);
router.use('/Emruntss', Emprunts);

module.exports = router;