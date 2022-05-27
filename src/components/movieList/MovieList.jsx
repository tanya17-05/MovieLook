import "./movieList.scss";

const MovieList = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map((movie, index) => {
        return (
          <div className="movie">
            <img src={movie.Poster} className="poster" alt="" />
            <div className="movieName">
              {movie.Title}
              <a
                target="blank"
                href={`https://www.imdb.com/title/${movie.imdbID}/`}
                className="imbdLink"
              >
                See on IMDB
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
