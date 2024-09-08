// routes/quotes.js

const express = require('express');
const Quote = require('../models/quote');

const router = express.Router();


// GET: Retrieve a random quote
router.get('/random', async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);

    // Log the entire randomQuote object to check if quote is present
    console.log('Random Quote Object:', randomQuote);

    // Check if quote is available in the document (note that 'quote' is now used instead of 'content')
    res.json({
      quote: randomQuote.quote || 'No quote available',  // Ensure 'quote' is accessed correctly
      author: randomQuote.author || 'Unknown Author',
      tags: randomQuote.category || []
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





// GET: Search quotes by author
router.get('/search', async (req, res) => {
  const { author } = req.query;
  
  try {
    // Case-insensitive search by author name
    const quotes = await Quote.find({
      author: { $regex: new RegExp(author, 'i') }  // Use regex for case-insensitive matching
    });

    if (!quotes || quotes.length === 0) {
      return res.status(404).json({ error: 'No quotes found for this author' });
    }

    // Console log each quote found
    quotes.forEach(quote => {
      console.log('Found Quote:', quote);
    });

    // Send the found quotes back to the client
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;


