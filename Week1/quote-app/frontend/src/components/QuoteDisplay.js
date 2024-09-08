import React, { useState } from 'react';
import axios from 'axios';
import '../QuoteDisplay.css';  

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quotes/random');
      console.log('Random Quote Response:', response.data);
      setQuote(response.data.quote);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  return (
    <div className="quote-display-container">
      <h1>Random Quote</h1>
      <button className="quote-button" onClick={fetchRandomQuote}>
        Get Random Quote
      </button>
      {quote && (
        <div className="quote-card">
          <p className="quote-text">"{quote}"</p>
          <p className="quote-author">- {author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteDisplay;
