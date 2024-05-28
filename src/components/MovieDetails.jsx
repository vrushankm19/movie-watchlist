import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ movie }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ad2ec621`);
        if (response.data.Response === "True") {
          setDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movie]);

  return (
    <div>
      <h2>{details.Title} ({details.Year})</h2>
      <img src={details.Poster} alt={details.Title} />
      <p>{details.Plot}</p>
    </div>
  );
};

export default MovieDetails;
    