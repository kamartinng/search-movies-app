import React from "react";

const MovieList = (props) => {
  const AddFavoriteComponent = props.favoriteComponent;
  console.log(props.movies);
  if (props.movies?.length <= 0) return;

  return (
    <>
      {props.movies?.map((movie) => {
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

export default MovieList;
