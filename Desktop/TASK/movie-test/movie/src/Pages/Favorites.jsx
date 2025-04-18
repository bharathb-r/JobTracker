import React from "react";
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

const Favorites = () => {
  const { fav } = useMovieContext();

  if (fav.length === 0) {
    return (
      <div>
        <div>
          <h1>No Favorites was added</h1>
          <p>Go back add some movies in the home page</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Favorites Movies</h1>
      {fav.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Favorites;
