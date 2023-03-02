const express = require("express");
const router = express.Router();

const controller = require('../Controllers/EmployéControllers');

// Ajouter une Categorie 
router.post('/categories', controller.createCategorie);


// Ajouter une Categorie 
router.patch('/categories/:id', controller.updatedCategorie);



// Afficher toute les Categorie 
router.get('/categories', controller.getAllCategories);



// Afficher une Categorie specifique
router.get('/categories/:id', controller.getCategorie);

 

// Supprimer une Categorie
router.delete('/categories/:id', controller.deletedCategorie);


module.exports = router;