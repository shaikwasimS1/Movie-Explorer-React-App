import "./Movies.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

const Movies = () => {

  const [SearchParams] = useSearchParams()
  const query = SearchParams.get("query") || "Avengers"

  const [movies, setMovies] = useState([])

  useEffect(() => {

    const fetchMovies = async () => {
      let response = await axios.get("https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "15ff114f9a7789648a9ae64291094777",
            query: query
          }
        }
      )
      setMovies(response.data.results)
      console.log(response.data.results);

    }
    fetchMovies()

  }, [query])

  return (
    <>
      <div className="Movies">
        <div className="hero-image my-5">
          {movies.length > 0 && movies[0].backdrop_path &&  (
            <div
              className="movie-title p-5"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movies[0].backdrop_path})` }}
            >
              <div className="text-content">
                <h1 className="title">Title: {movies[0].original_title}</h1>
                <h2 className="overview">OverView: {movies[0].overview
                }</h2>
                <p className="relase">Relase Date: {movies[0].release_date}</p>
              </div>
            </div>
          )}
        </div>

        <div className="moviesLists">
          <div className="row p-5">
            {movies.map((movie) => (
              <div className="col-lg-3 text-center  text-lg-start"  key={movie.id}>

                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="movie" width="18rem" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <p>Relase Date: {movie.release_date}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
};

export default Movies;