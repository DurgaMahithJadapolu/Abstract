// models/Card.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
