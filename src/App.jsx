import { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/home/Home";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a122abb1`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
      <div className="App">
            <Home
              movies={movies}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
      </div>
  );
}

export default App;
