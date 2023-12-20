import { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from './search.svg'

const API_URL='http://omdbapi.com/?apikey=a4e53ebb';

const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  searchMovies("Batman");
}, []);

const searchMovies= async (title) => {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
setMovies(data.Search);
}

  return (
    <div className="app">
      <a style={{ textDecoration: 'none' }} href="/"><h1> cinemaclub</h1></a>

      <div className="search">
        <input type="text" placeholder="Search for a movie" value={searchTerm} onChange={(evnt) => setSearchTerm(evnt.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;