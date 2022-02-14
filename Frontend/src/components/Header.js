import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Tabs>
            <Tab LinkComponent={NavLink} to="/" label="Movie Store" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Movie" />
            <Tab LinkComponent={NavLink} to="/movies" label="Movies" />
            <Tab LinkComponent={NavLink} to="/register" label="Register" />
            <Tab LinkComponent={NavLink} to="/signin" label="Signin" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
<Typography>Movie Store</Typography>;
