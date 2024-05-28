import React from 'react';

const MovieCard = ({ movie, onAddToWatchlist }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title} ({movie.Year})</h3>
    <button className='btn' onClick={() => onAddToWatchlist(movie)}>+</button>
  </div>
);

export default MovieCard;
