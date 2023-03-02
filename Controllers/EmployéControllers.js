const Livre = require('../Models/Livre');
const Categorie = require('../Models/Categorie');

// Créer une Categorie 

async function createCategorie(req, res){
    let Categorie = new Categorie({
        Titre: req.body.Titre,
        Description: req.body.Description,
    });
    try {
        const newCategorie = await Categorie.save();
        res.status(201).json(newCategorie);
    }  catch (err) {
        res.status(400).json({ message: err.message})
    }
};


// Modifier une Categorie
async function updatedCategorie(req, res){
    try {
        const CategorieUpdated = await Categorie.findByIdAndUpdate(req.params.id, req.body);
        res.json(CategorieUpdated);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }; 
};


// Supprimer une Categorie
async function deletedCategorie(req, res){
    try {
        const CategorieDeleted = await Categorie.findByIdAndRemove(req.params.id); 
      if (CategorieDeleted) {
        res.json({ message: 'Supprimée !' }); 
      } else {
        res.status(404).json({ message: 'Supprimée !'}); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    };
};


// Afficher une categorie Specifique
async function getCategorie (req, res) {
    try {
        const Categorie = await Categorie.findById(req.params.id);
        res.send(Categorie);
    }
    catch (err) {
        console.log(err);
    }
};


//Afficher toute les Categories
async function getAllCategories (req, res) {
    try {
        await Categorie.find({}).then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
};







// Livre
// Ajouter un Livre

async function  addLivre (req, res) {
    const Categorie = req.body.Categorie
    try {
        const new_Livre = new Book({
            Titre: req.body.Titre,
            Auteur: req.body.Auteur,
            Categorie: req.body.Categorie,
            Note: req.body.Note,
            Nombre_copie: req.body.Nombre_copie,
            Nombre_emprunt: req.body.Nombre_emprunt,
        });

        const CategorieUpdated = await Categorie.findOne({
            Titre: Categorie,
        });
        await CategorieUpdated.save();
        await new_Livre.save()
        res.send(new_Livre);
    }
    catch (err) {
        console.log(err);
    }
};

// Supprimer un Livre
async function deletedLivre(req, res){
    try {
        const LivreDeleted = await Book.findByIdAndRemove(req.params.id); 
      if (LivreDeleted) {
        res.json({ message: 'Livre Supprimé de la BibliTech' }); 
      } else {
        res.status(404).json({ message: 'Livre Supprimé de la BibliTech'}); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    };
};

//Modifier un livre
async function updatedLivre(req, res){
    try {
        const LivreUpdated = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.json(LivreUpdated);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }; 
};


module.exports = {
    createCategorie,
    getCategorie,
    updatedCategorie,
    deletedCategorie,
    getAllCategories,
    addLivre,
    deletedLivre,
    updatedLivre,
};


















