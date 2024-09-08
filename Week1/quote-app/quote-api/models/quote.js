const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  quote : { type: String, required: true },
  author: { type: String, required: true },  // Assuming author is stored as a string
  category: [String]  // Assuming category is an array of strings (tags)
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
