const mongoose = require("mongoose");

const LivreSchema = new mongoose.Schema ({
Titre : {
    type:String,
    required:true,
    unique:true
},
Auteur :{
    type:String,
    required:true
},
Categorie: {
    type: String,
    required: true,
  },
Note: {
    type: Number,
    required: true,
},
Nombre_copie: {
    type:Number,
    required:true,
},
Nombre_emprunt:{
    type:Number,
    default:0
},
});

module.exports = mongoose.model('Livre', LivreSchema);