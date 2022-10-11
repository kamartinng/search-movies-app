import { MovieType } from "../App";

interface MovieListType {
  movies: MovieType[];
  favoriteComponent: () => JSX.Element;
  handleFavoriteMoviesClick: (value: MovieType) => void;
}

const MovieList = ({
  favoriteComponent,
  movies,
  handleFavoriteMoviesClick,
}: MovieListType) => {
  const AddFavoriteComponent = favoriteComponent;
  if (movies?.length <= 0) return;

  return (
    <>
      {movies?.map((movie, index) => {
        return (
          <div className="movieCard" key={`movie-${index}`}>
            <img src={movie.Poster} alt={movie.Title}></img>
            <div
              className="overlay"
              onClick={() => handleFavoriteMoviesClick(movie)}
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
