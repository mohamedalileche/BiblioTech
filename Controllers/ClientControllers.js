const Livre = require('../Models/Livre');
const Emprunt = require('../Models/Emprunt');


// Afficher touts les livres:

async function getAllLivres (req, res) {
    try {
        await Livre.find({}).then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
};



// Afficher un Livre 
async function getLivre (req, res) {
    // Déclaration d'un objet vide nommé "book"
    let book = {};
    
    try {
        // Switch statement pour traiter différents critères de recherche de livre en fonction de la propriété passée dans la requête
        switch (Object.keys(req.query)[0]) {
            // Si la propriété de la requête est "_id", chercher le livre par son _id en utilisant la méthode "findById" de l'objet "Book"
            case 'Titre':
                Livre = await Livre.findById({Titre: req.query.Titre});
                break;
            // Si la propriété de la requête est "author", chercher le livre par son auteur en utilisant la méthode "findOne" de l'objet "Book"
            case 'Auteur':
                Livre = await Livre.findOne({ Auteur: req.query.Auteur });
                break;
            // Si la propriété de la requête est "rate", chercher le livre par son taux en utilisant la méthode "findOne" de l'objet "Book"
            case 'Categorie':
                Livre = await Livre.findOne({ Categorie: req.query.Categorie });
                break;
            // Si la propriété de la requête est "category", chercher le livre par sa catégorie en utilisant la méthode "findOne" de l'objet "Book"
            case 'Note':
                Livre = await Livre.findOne({ Note: req.query.Note });
                break;
            // Si aucune propriété ne correspond, renvoyer une réponse JSON avec le message "Désolé, non trouvé !"
            default:
                res.json(`Désolé, non trouvé !`);
        }
        // Envoyer une réponse avec un code de statut 200 et l'objet "book" sous forme de JSON
        res.status(200).json(book)
    }
    // Attraper les erreurs et les afficher dans la console
    catch (err) {
        console.log(err)
    }
};



// Emprunter un Livre

async function addEmprunt(req, res) {
    // Récupérer les informations nécessaires depuis la requête HTTP
    const Livre = req.body.Livre;
    const month = new Date(req.body.DateSortie).getMonth();
  
    try {
      // Trouver tous les emprunts en cours de l'utilisateur
      const Nombre_emprunt = await Emprunt.find({ user: req.body.user });
  
      // Compter le nombre d'emprunts en cours pour le même mois que le nouvel emprunt
      const count = Nombre_emprunt.reduce((total, item) => {
        if (item.DateSortie.getMonth() === month) {
          total += 1;
        }
        return total;
      }, 0);
  
      // Vérifier si l'utilisateur peut emprunter un livre
      if (count < 3) {
        // Vérifier si le livre est disponible
        const search = await Livre.findById(Livre._id);
        if (search.Nombre_copie > 0) {
          // Mettre à jour les informations de disponibilité et d'emprunt du livre
          search.Nombre_copie -= 1;
          const new_Emprunt = new Emprunt({
            user: req.body.user,
            Livre: req.body.Livre,
            DateSortie: req.body.DateSortie,
            DateRetour: req.body.DateRetour,
          });
          await new_Emprunt.save();
          await Livre.findByIdAndUpdate(Livre, { $inc: { Nombre_emprunt: 1 } });
          res.send("Votre Livre est pret");
        } else {
          res.send("Le livre n'est pas disponible");
        }
      } else {
        res.json("Vous avez depasser le nombre d'emprunts");
      }
    } catch (err) {
      console.log(err);
    }
  }


  



module.exports = {
    getLivre,
    getAllLivres,
    addEmprunt
};