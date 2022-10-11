import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";
import { API_KEY } from "./apikey"; //@ts-ignore

export interface MovieType {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type LocalStorageType = string | null;

type ParsedItemsType = MovieType[] | null;

const App = (): JSX.Element => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteMovies, setFavoritesMovies] = useState<MovieType[]>([]);

  const getMovieRequest = (searchValue: string): void => {
    if (!searchValue) return;

    const url = `http://www.omdbapi.com/?S=${searchValue}&apikey=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovies(data.Search);
        }
      })
      .catch(() => setMovies([]));
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const items: LocalStorageType = localStorage.getItem(
      "react-movie-app-favorites"
    );
    const parsedItems: ParsedItemsType = JSON.parse(items);

    if (parsedItems) {
      setFavoritesMovies(parsedItems);
    }
  }, []);

  const saveToLocalStorage = (items: MovieType[]): void => {
    localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
  };

  const removeFavoriteMovie = (inputMovie: MovieType): void => {
    const newFavoriteMovies = favoriteMovies.filter((movie) => {
      return movie.imdbID !== inputMovie.imdbID;
    });

    setFavoritesMovies(newFavoriteMovies);
    saveToLocalStorage(newFavoriteMovies);
  };

  const addFavoriteMovie = (movie: MovieType): void => {
    const newFavoriteMovies = [...favoriteMovies, movie];
    setFavoritesMovies(newFavoriteMovies);
    saveToLocalStorage(newFavoriteMovies);
  };

  return (
    <div className="main-container container">
      <div className="row-container heading-container">
        <MovieHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row-container">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorites}
          handleFavoriteMoviesClick={addFavoriteMovie}
        />
      </div>
      <div className="row-container heading-container">
        <MovieHeading heading="Favorites" />
      </div>
      <div className="row-container">
        <MovieList
          movies={favoriteMovies}
          favoriteComponent={RemoveFavorites}
          handleFavoriteMoviesClick={removeFavoriteMovie}
        />
      </div>
    </div>
  );
};

export default App;
