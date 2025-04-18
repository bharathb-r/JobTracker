const API_KEY = "9a73216aa179380c5e1fa3baaca875d1";

const BASE_API = "https://api.themoviedb.org/3";

export const popularMovies = async () => {
  const respone = await fetch(`${BASE_API}/movie/popular?api_key=${API_KEY}`);
  const data = await respone.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const respone = await fetch(
    `${BASE_API}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await respone.json();

  return data.results;
};
