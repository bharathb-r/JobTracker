import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { popularSearch, movieSearch } from "../Services/Services";

const Home = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const popular = async () => {
      try {
        const popularMovies = await popularSearch();
        setMovie(popularMovies);
      } catch (err) {
        console.log(error);
        setError("failed");
      } finally {
        setLoading(false);
      }
    };

    popular();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResult = await movieSearch(searchQuery);
      searchQuery(searchResult);
      setError(null);
    } catch (err) {
      setError("searching error");
    } finally {
      setLoading(false);
    }

  };
  return (
    <div>
      <form onClick={handleSearch} action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
      <div>
        {movie.map((movies) => (
          <MovieCard key={movies.id} movies={movies} />
        ))}
      </div>
    </div>
  );
};

export default Home;
