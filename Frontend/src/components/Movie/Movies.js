import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

const URL = "http://localhost:5000/movies";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setMovies(data.movies));
  }, []);
  console.log(movies);
  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie, i) => (
            <li key={i}>
              <Movie movie={movie} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
