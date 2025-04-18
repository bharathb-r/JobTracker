import {
  useState,
  useEffect,
  createContext,
  useContext,
  
} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MoiveProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storefav = localStorage.getItem("favorites");

    if (storefav) setFav(JSON.parse(storefav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(fav));
  }, [fav]);

  const add = (movie) => {
    setFav((prev) => [...prev, movie]);
  };

  const remove = (movieId) => {
    setFav((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const show = (movieId) => {
    return fav.some((moive) => moive.id == movieId);
  };
  const value = {
    fav,
    add,
    remove,
    show,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
