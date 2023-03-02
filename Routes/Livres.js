const express = require("express");
const router = express.Router();
const controller = require('../Controllers/EmployéControllers');
const controller = require('../Controllers/ClientControllers');



router.post('/Livres', controller.addLivre);


 
router.patch('/Livres/:id', controller.updatedLivre);


 
router.delete('/Livres/:id', controller.deletedLivre);


router.get('/Livres', control.getAllLivres);



router.get('/Livres/search', control.getLivre);


module.exports = router;