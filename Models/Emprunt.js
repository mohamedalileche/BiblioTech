const mongoose = require('mongoose');



const EmpruntSchema = new mongoose.Schema({
  Livre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  Client: {
    type: String,
    required: true
  },
  DateSortie: {
    type: Date,
    required: true,
  },
  DateRetour: {
    type: Date,
    required: true
  },
  
});

module.exports = mongoose.model('Emprunt', EmpruntSchema);