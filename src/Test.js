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
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  Drawer,
  Snackbar,
  Alert,
  CircularProgress,
  LinearProgress,
  Rating,
  ImageList,
  ImageListItem,
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
import { Box, Container } from "@mui/system";

const states = [
  "Alba",
  "Arad",
  "Arges",
  "Bacau",
  "Bihor",
  "Bistrita-Nasaud",
  "Botosani",
  "Braila",
  "Brasov",
  "Bucuresti",
  "Buzau",
  "Calarasi",
  "Caras-Severin",
  "Cluj",
  "Constanta",
  "Covasna",
  "Dimbovita",
  "Dolj",
  "Galati",
  "Gorj",
  "Giurgiu",
  "Harghita",
  "Hunedoara",
  "Ialomita",
  "Iasi",
  "Ilfov",
  "Maramures",
  "Mehedinti",
  "Mures",
  "Neamt",
  "Olt",
  "Prahova",
  "Salaj",
  "Satu Mare",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timis",
  "Tulcea",
  "Vaslui",
  "Vilcea",
  "Vrancea",
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

const array = ["First", "Second", "Third", "Fourth", "Fifth"];

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
  const [openList, setOpenList] = useState(false);
  const [according, setAccording] = useState("");

  const arrOptions = ["Links", "Balance", "Alert"];
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(true);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <CircularProgress color="error" />
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
            variant="contained"
            color="success"
            onClick={() => setOpenDrawer(true)}
          >
            Drawer
          </Button>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <List>
              {arrOptions.map((elm) => (
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemText primary={elm} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>

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
        <LinearProgress color="inherit" />
      </AppBar>

      <Box sx={{ marginTop: 10 }}>
        <Rating
          precision={0.5}
          size="large"
          value={value}
          onChange={(e, val) => setValue(val)}
        />
        <Typography variant="h5" sx={{ color: "red" }}>
          Rated {value !== undefined ? value : 0} Stars
        </Typography>
      </Box>

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

      <Container maxWidth="md">
        <Card sx={{ maxWidth: 345, marginTop: 5, margin: "auto" }}>
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
            <Link
              sx={{ margin: "auto" }}
              variant="h4"
              color="secondary"
              underline="hover"
              href="www.google.ro"
            >
              Google
            </Link>
          </CardActions>
        </Card>
      </Container>

      <Container>
        <Box>
          <List>
            <ListItem divider>
              <ListItemButton onClick={() => setOpenList(true)}>
                <ListItemIcon>{">"}</ListItemIcon>
                <ListItemText primary={"Expand List"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={openList}>
            <List sx={{ marginLeft: 10, background: "grey" }}>
              {array.map((listElm) => (
                <ListItem divider>
                  <ListItemButton onClick={() => setOpenList(false)}>
                    <ListItemText primary={listElm} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      </Container>

      <Box>
        <Accordion
          expanded={according === "test1"}
          onChange={() => setAccording("test1")}
        >
          <AccordionSummary expandIcon={">"}>
            <Typography>Test 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ImageList sx={{ width: 200, height: 200 }} cols={3}>
              {itemData.map((image, index) => (
                <ImageListItem>
                  <img src={image.img} alt={image.title} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={according === "test2"}
          onChange={() => setAccording("test2")}
        >
          <AccordionSummary expandIcon={">"}>
            <Typography>Test 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>My name is Andrei and I learn Accordion</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Container maxWidth="md" sx={{ marginTop: 5 }}>
        <Autocomplete
          options={states}
          renderInput={(params) => (
            <TextField {...params} label="List of States" />
          )}
        />
      </Container>
      <Box>
        <Snackbar
          onClose={() => setOpenSnackBar(false)}
          autoHideDuration={8000}
          open={openSnackBar}
        >
          <Alert severity="success">This is an Alert from Snackbar</Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default Test;
