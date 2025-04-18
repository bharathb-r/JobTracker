import React from "react";
import { usemovie } from "../Context/Context";

const MovieCard = ({ movie }) => {
  const { add, remove, isfav } = usemovie();
  const favMovie = isfav(movie.id);
  function handlefav(e) {
    e.preventDefault();
    if (favMovie) {
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
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.release_date.split("-")[0]}</p>
      <button onClick={handlefav}> {favMovie ? "❤️" : "🤍"}</button>
    </div>
  );
};

export default MovieCard;
