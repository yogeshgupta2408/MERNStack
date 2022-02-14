import { Box, Button, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:5000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (data.status === 400) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Sucessful Login");
      history("/");
    }
  };

  return (
    <form onSubmit={loginUser}>
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
        <FormLabel>Email</FormLabel>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
        />
        <FormLabel>Password</FormLabel>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
          name="password"
          type="password"
        />
        <Button variant="contained" type="submit">
          Sign-In
        </Button>
      </Box>
    </form>
  );
};

export default Signin;
