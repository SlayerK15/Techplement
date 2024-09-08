// src/App.js
import React from 'react';
import QuoteDisplay from './components/QuoteDisplay';
import SearchQuote from './components/SearchQuote';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <QuoteDisplay />
      <hr />
      <SearchQuote />
    </div>
  );
}

export default App;
