const mongoose = require("mongoose");

const CategorieSchema = new mongoose.Schema ({
    Titre: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    });

module.exports =  mongoose.model("Categorie", CategorieSchema);