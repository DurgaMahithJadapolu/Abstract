// routes/cards.js
const express = require('express');
const router = express.Router();
const Card = require('../Model/Card');
const { v4: uuidv4 } = require('uuid');

// POST /cards - Create a new card
router.post('/Create', async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCard = new Card({
      id: uuidv4(),
      title,
      description
    });

    const savedCard = await newCard.save();
    res.status(201).send("Card is created Sucessfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /cards - Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /cards/:title - Get a specific card by title
router.get('/:title', async (req, res) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
