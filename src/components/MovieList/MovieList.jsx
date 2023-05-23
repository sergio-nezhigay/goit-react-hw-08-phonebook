import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, MovieTitle, List, MovieLink } from './MovieList.styled';
import * as theMovieDbAPI from '../../components/api/themoviedbApi';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieList({ movies, location, title }) {
  const [trailer, setTrailer] = useState(null);

  const handleMovieHover = async movieId => {
    const video = await theMovieDbAPI.fetchTrailer(movieId);
    if (video) {
      setTrailer({ video, movieId });
    }
  };

  const handleMovieLeave = () => {
    setTrailer(null);
  };

  return (
    <>
      {!!title.length && <Title>{title}</Title>}
      {!!movies.length && (
        <List>
          {movies.map(movie => (
            <li key={movie.id} title="Click to read movie details">
              <MovieLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                onMouseEnter={() => handleMovieHover(movie.id)}
                onMouseLeave={handleMovieLeave}
              >
                {trailer && trailer.movieId === movie.id && trailer.video ? (
                  <iframe
                    title={movie.title}
                    src={trailer.video}
                    allow="autoplay; "
                  />
                ) : (
                  movie.poster_path && (
                    <img
                      src={IMAGES_BASE_URL + movie.poster_path}
                      alt={movie.title}
                    />
                  )
                )}
                {!movie.poster_path && <MovieTitle>{movie.title}</MovieTitle>}
              </MovieLink>
            </li>
          ))}
        </List>
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
