import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie = (props) => {
  const history = useNavigate();
  const { _id, name, director, genre, year, released, image } = props.movie;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/movies/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/movies"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article> By {director}</article>
      <h3>{name}</h3>
      <h3>{genre}</h3>
      <h3>{year}</h3>
      <h3>{released}</h3>
      <Button LinkComponent={Link} to={`/movies/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default Movie;
