import React from "react";

const MovieList = (props) => {
  const AddFavoriteComponent = props.favoriteComponent;
  if (props.movies?.length <= 0) return;

  return (
    <>
      {props.movies?.map((movie, index) => {
        return (
          <div className="movieCard" key={`movie-${index}`}>
            <img src={movie.Poster} alt={movie.Title}></img>
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
