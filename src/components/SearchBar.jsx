import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=ad2ec621`);
      if (response.data.Response === "True") {
        onResults(response.data.Search);
      } else {
        onResults([]); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      onResults([]);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies" 
        required 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
