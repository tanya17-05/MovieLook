import "./home.scss";
import MovieList from "../movieList/MovieList";
import SearchBox from "../searchBox/SearchBox";

const Home = ({movies, searchValue, setSearchValue}) => {
  return (
    <div>
        <div className="top-row">
          <h1>Movies</h1>
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      {searchValue === "" ? (
        <div className="emptySearch">
          Please search something to show movies
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
