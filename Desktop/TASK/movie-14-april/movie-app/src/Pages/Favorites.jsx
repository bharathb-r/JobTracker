import React from "react";
import { usemovie } from "../Context/Context";
import MovieCard from "../Components/MovieCard";

const Favorites = () => {
  const { fav } = usemovie();

  if (fav.length === 0) {
    return <p>empty</p>;
  }
  return (
    <div>
      {fav.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Favorites;
