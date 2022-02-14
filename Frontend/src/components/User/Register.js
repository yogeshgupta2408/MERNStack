import { Box, Button, FormLabel, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = inputs;
    const res = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Details");
    } else {
      window.alert("Successful");
      history("/signin");
    }
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
        <FormLabel>Email</FormLabel>
        <TextField
          value={inputs.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
        />
        <FormLabel>Password</FormLabel>
        <TextField
          value={inputs.password}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="password"
          type="password"
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
        <Link href="/signin" variant="body2" sx={{ mx: "auto" }}>
          Already Registered
        </Link>
      </Box>
    </form>
  );
};

export default Register;
