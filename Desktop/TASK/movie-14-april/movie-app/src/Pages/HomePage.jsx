import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { searchMovies, popularMovies } from "../Services/Services";
const HomePage = () => {
  const [search, setSearch] = useState("");
  const [searchinput, setSearchInput] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchbox = await searchMovies(search);
      setSearchInput(searchbox);
      setError(null);
    } catch (err) {
      setError("ERROR IN SEARCH");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const popular = async () => {
      try {
        const popularmovies = await popularMovies();
        setSearchInput(popularmovies);
      } catch (err) {
        setError("popular movie error.");
      } finally {
        setLoading(false);
      }
    };
    popular();
  }, []);
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter the movie name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div>
            {searchinput.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
           
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
