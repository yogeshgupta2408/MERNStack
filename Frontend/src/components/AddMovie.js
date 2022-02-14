import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    director: "",
    genre: "",
    year: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/movies", {
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
    console.log(inputs, checked);
    sendRequest().then(() => history("/movies"));
  };
  return (
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
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Director</FormLabel>
        <TextField
          value={inputs.director}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="director"
        />
        <FormLabel>Genre</FormLabel>
        <TextField
          value={inputs.genre}
          onChange={handleChange}
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
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Released"
        />
        <Button variant="contained" type="submit">
          Add Movie
        </Button>
      </Box>
    </form>
  );
};

export default AddMovie;
