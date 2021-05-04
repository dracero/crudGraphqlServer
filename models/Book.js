var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  id: String,
  isbn: String,
  title: String,
  author: String,
  description: String,
  //published_year: { type: Number, min: 1945, max: 2019 },
  published_year: Number,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
