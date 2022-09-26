// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/http://www.omdbapi.com/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          Title: "Star Wars: Episode IV - A New Hope",
          Year: "1977",
          imdbID: "tt0076759",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
        },
        {
          Title: "Star Wars: Episode V - The Empire Strikes Back",
          Year: "1980",
          imdbID: "tt0080684",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
      ])
    );
  }),
];
