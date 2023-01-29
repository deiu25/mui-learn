import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
          <Typography variant="h2" padding={3} textAling="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={inputs.name}
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            value={inputs.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button
            endIcon={
              isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            endIcon={
              isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
            }
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
