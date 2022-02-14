import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Typography sx={{ fontFamily: "inherit" }} variant="h2">
          Crud Application For Movie Store
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
