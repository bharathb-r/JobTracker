import React from "react";
import { useMovieContext } from "../Context/MovieContext";

const MovieCard = ({ movie }) => {
  const { add, remove, show } = useMovieContext();
  const fav = show(movie.id);
  function handlefav(e) {
    e.preventDefault();
    if (fav) {
      remove(movie.id);
    } else {
      add(movie);
    }
  }

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <button onClick={handlefav}> {fav ? "❤️" : "🤍"}</button>
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.release_date?.split("-")[0]}</p>
    </div>
  );
};

export default MovieCard;
