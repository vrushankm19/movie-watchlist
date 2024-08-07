import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TmdbBody = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: 'YOUR_API_KEY',
            sort_by: 'release_date.desc', // Sorting by release date in descending order
            language: 'en-US',
            include_adult: false,
            include_video: false,
            page: 1
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching the movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Function to group movies by year
  const groupMoviesByYear = (movies) => {
    return movies.reduce((acc, movie) => {
      const year = new Date(movie.release_date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(movie);
      return acc;
    }, {});
  };

  const groupedMovies = groupMoviesByYear(movies);

  return (
    <div className="tmdb-body">
      {Object.keys(groupedMovies).map(year => (
        <div key={year}>
          <h2 className='tmdb-body-title'>{year}</h2>
          <div className='movies'>
            {groupedMovies[year].map(movie => (
              <div key={movie.id} className='movie'>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                {/* Additional movie details can be added here */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TmdbBody;
