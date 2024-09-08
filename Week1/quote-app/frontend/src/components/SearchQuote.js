import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';  // Import the CSS file for styling

const SearchQuote = () => {
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);

  const searchByAuthor = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/quotes/search?author=${author}`);
      setQuotes(response.data);
    } catch (error) {
      console.error('Error searching for quotes:', error);
    }
  };

  return (
    <div className="quote-search-container">
      <h1>Search Quotes by Author</h1>
      <div className="search-box">
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Enter author's name" 
          className="search-input"
        />
        <button onClick={searchByAuthor} className="search-button">Search</button>
      </div>

      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote.quote}"</p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchQuote;
