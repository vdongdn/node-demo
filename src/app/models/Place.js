const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Place = new Schema({
  title: String,
  content: String,
  image: String,
  status: Number,
});

module.exports = mongoose.model('Place', Place);