import React, { useState } from "react";

const MovieCard = ({ movies }) => {
  return (
    <div>
      <div key={movies.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
        />
        <h3>{movies.title}</h3>
        <p>{movies.release_date}</p>
        <div>
          <button>🤍</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
