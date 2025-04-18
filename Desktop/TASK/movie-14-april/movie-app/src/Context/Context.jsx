import { createContext, useContext, useEffect, useState } from "react";

const movieContext = createContext();

export const usemovie =()=> useContext(movieContext);

export const MovieProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedfav = localStorage.getItem("favorites");
    if (storedfav) setFav(JSON.parse(storedfav));
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(fav));
  }, [fav]);

  const add = (movies) => {
    setFav((prev) => [...prev, movies]);
  };

  const remove = (moviesId) => {
    setFav((prev) => prev.filter((moive) => moive.id !== moviesId));
  };

  const isfav = (moviesId) => {
    return fav.some((movie) => movie.id === moviesId);
  };

  const value = {
    fav,
    add,
    remove,
    isfav,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};
