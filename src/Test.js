import { React, useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <Typography variant="h5" sx={{ color: "red" }}>
        Hello World
      </Typography>

      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type={"text"}
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type={"email"}
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
        />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type={"password"}
          sx={{ margin: 3 }}
          placeholder="Password"
          variant="filled"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe to NewsLetter"
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Test;
