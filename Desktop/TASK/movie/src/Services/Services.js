const API_KEY = "9a73216aa179380c5e1fa3baaca875d1";

const BASE_API = "https://api.themoviedb.org/3";

export const popularSearch = async () => {
  const response = await fetch(`${BASE_API}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.results;
};

export const movieSearch = async (query) => {
  const response = await fetch(
    `${BASE_API}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();

  return data.results;
};
