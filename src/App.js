import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";
import { API_KEY } from "./apikey";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteMovies, setFavoritesMovies] = useState([]);

  const getMovieRequest = (searchValue) => {
    if (!searchValue) return;

    const url = `http://www.omdbapi.com/?S=${searchValue}&apikey=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log("data.search", data.Search);
          setMovies(data.Search);
        }
      })
      .catch((err) => setMovies([]));
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const items = localStorage.getItem("react-movie-app-favorites");
    const parsedItems = JSON.parse(items);

    if (items) {
      setFavoritesMovies(parsedItems);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favorites", JSON.stringify(items));
  };

  const removeFavoriteMovie = (inputMovie) => {
    const newFavoriteMovies = favoriteMovies.filter((movie) => {
      return movie.imdbID !== inputMovie.imdbID;
    });

    setFavoritesMovies(newFavoriteMovies);
    saveToLocalStorage(newFavoriteMovies);
  };

  const addFavoriteMovie = (movie) => {
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
}

export default App;
