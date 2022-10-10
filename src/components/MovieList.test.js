import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieList from "./MovieList";
import AddFavorites from "./AddFavorites";

describe.skip("MovieList", () => {
  const movies = [
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
  ];

  it("card should render when movies get passed to list", () => {
    render(
      <MovieList
        movies={movies}
        handleFavoriteMoviesClick={() => {}}
        favoriteComponent={AddFavorites}
      />
    );

    const image = screen.getByAltText("tt0076759");
    expect(image).toBeInTheDocument();
  });

  it("overlay should be in the document", () => {
    render(
      <MovieList
        movies={movies}
        handleFavoriteMoviesClick={() => {}}
        favoriteComponent={AddFavorites}
      />
    );

    const overlay = screen.getByText("Add to Favorites");
    userEvent.click(overlay);

    const FavoritesContainer = screen.getByText('Remove from Favorite');
    expect(FavoritesContainer).toBeInTheDocument();
  })
});
