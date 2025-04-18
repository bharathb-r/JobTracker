const API_KEY = "9a73216aa179380c5e1fa3baaca875d1";

const BASE_URL = "https://api.themoviedb.org/3";

export const PopularMovie = async () => {
  const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await respone.json();

  return data.results;
};

export const searchMovie = async (query) => {
  const respone = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await respone.json();

  return data.results;
};
