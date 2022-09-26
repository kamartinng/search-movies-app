import React from "react";
import PropTypes from "prop-types";

const MovieList = (props) => {
  const AddFavoriteComponent = props.favoriteComponent;

  return (
    <>
      {props.movies.map((movie) => {
        return (
          <div className="movieCard" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.imdbID}></img>
            <div
              className="overlay"
              onClick={() => props.handleFavoriteMoviesClick(movie)}
            >
              <AddFavoriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

// MovieList.propTypes = {
//   handleFavoriteMoviesClick: PropTypes.func,
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       imdbID: PropTypes.string,
//       Poster: PropTypes.string,
//     })
//   ),
// };

export default MovieList;
