import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { PopularMovie, searchMovie } from "../Services/Services";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const search = await searchMovie(searchQuery);
      setMovie(search)
      setError(null);
    } catch (err) {
      setError("error in search");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const popular = async () => {
      try {
        const popularSearch = await PopularMovie();
        setMovie(popularSearch);
      } catch (err) {
        setError("search failed");
      } finally {
        setLoading(false);
      }
    };

    popular();
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search movie.."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movie.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
