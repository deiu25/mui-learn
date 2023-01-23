import { React, useState } from "react";
import {
  AppBar,
  Typography,
  Button,
  TextField,
  Toolbar,
  Tabs,
  Tab,
  CardActionArea,
  CardActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Modal,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: undefined,
    gender: "",
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

  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Tabs
            sx={{ margin: "auto" }}
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="First" />
            <Tab label="Second" />
            <Tab label="Third" />
          </Tabs>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="warning"
          >
            Login
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>LOGIN DIALOG</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Now u can not login to this page
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(true)}>Agree</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpenModal(true) & setOpen(false)}>
                Create Account
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>

      <Typography variant="h5" sx={{ color: "red", marginTop: "100px" }}>
        Hello World
      </Typography>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Card
          sx={{ maxWidth: 500 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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

          <FormControl fullWidth>
            <InputLabel>Age</InputLabel>
            <Select
              name="age"
              value={inputs.age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={handleChange} name="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <Button type="submit" onClick={() => setOpenModal(false)}>
            Submit
          </Button>
        </Card>
      </Modal>

      <Card sx={{ maxWidth: 345, marginTop: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Test;
