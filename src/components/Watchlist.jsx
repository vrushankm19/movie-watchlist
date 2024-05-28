import React from 'react';

const Watchlist = ({ watchlist, onRemove }) => (
  <div className="watchlist">
    <h2>Your Watchlist</h2>
    {watchlist.map(movie => (
      <div key={movie.imdbID} className="watchlist-item">
        <h3>{movie.Title} ({movie.Year})</h3>
        <button className='btn btn-info' onClick={() => onRemove(movie.imdbID)}>Remove</button>
      </div>
    ))}
  </div>
);

export default Watchlist;
