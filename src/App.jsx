// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (user) {
      const userWatchlist = JSON.parse(localStorage.getItem(`watchlist_${user}`)) || [];
      setWatchlist(userWatchlist);
    }
  }, [user]);

  const handleLogin = (email) => {
    setUser(email);
    localStorage.setItem('user', email);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setWatchlist([]);
  };

  const handleAddToWatchlist = (movie) => {
    setWatchlist(prev => {
      const updatedWatchlist = [...prev, movie];
      localStorage.setItem(`watchlist_${user}`, JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const handleRemoveFromWatchlist = (imdbID) => {
    setWatchlist(prev => {
      const updatedWatchlist = prev.filter(movie => movie.imdbID !== imdbID);
      localStorage.setItem(`watchlist_${user}`, JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Sidebar user={user} onLogout={handleLogout} />
      <div className="main-content">
        <h2>Welcome to Watchlists</h2>
        <p>Browse movies, add them to watchlists and share them with friends. Just click the + to add a movie, the poster to see more details or the bookmark to mark the movie as watched.</p>
        <SearchBar onResults={setSearchResults} />
        <MovieList movies={searchResults} onAddToWatchlist={handleAddToWatchlist} />
        <Watchlist watchlist={watchlist} onRemove={handleRemoveFromWatchlist} />
      </div>
    </div>
  );
};

export default App;
