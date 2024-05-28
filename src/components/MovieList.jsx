import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onAddToWatchlist }) => (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieCard key={movie.imdbID} movie={movie} onAddToWatchlist={onAddToWatchlist} />
    ))}
  </div>
);

export default MovieList;
