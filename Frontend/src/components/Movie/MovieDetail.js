import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/movies/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.movie));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/movies/${id}`, {
        name: String(inputs.name),
        director: String(inputs.director),
        genre: String(inputs.genre),
        year: Number(inputs.year),
        image: String(inputs.image),
        released: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/movies"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //console.log(inputs);
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"cneter"}
            maxWidth={500}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={5}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              disabled="true"
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Director</FormLabel>
            <TextField
              value={inputs.director}
              onChange={handleChange}
              disabled="true"
              margin="normal"
              fullWidth
              variant="outlined"
              name="director"
            />
            <FormLabel>Genre</FormLabel>
            <TextField
              value={inputs.genre}
              onChange={handleChange}
              disabled="true"
              margin="normal"
              fullWidth
              variant="outlined"
              name="genre"
            />
            <FormLabel>Year</FormLabel>
            <TextField
              value={inputs.year}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="year"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Released"
            />
            <Button variant="contained" type="submit">
              Update Movie
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default MovieDetail;
