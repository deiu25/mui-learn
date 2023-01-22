import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const Test = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ color: "red" }}>
        Hello World
      </Typography>
      <Button
        onClick={() => alert("Button Clicked")}
        color="success"
        sx={{ margin: 3 }}
        size="large"
        variant="contained"
      >
        First
      </Button>
      <Button
        onClick={() => alert("Button Clicked")}
        color="error"
        sx={{ margin: 3 }}
        size="medium"
        variant="outlined"
      >
        Second
      </Button>
      <Button
        onClick={() => alert("Button Clicked")}
        color="info"
        sx={{ margin: 3 }}
        size="small"
        variant="text"
      >
        Third
      </Button>
    </div>
  );
};

export default Test;
