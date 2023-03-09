import logo from "./logo.svg";
import "./App.css";
import useJaneHopkins from "./hooks/useJaneHopkins";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { useState } from "react";
import ListView from "./components/listView"
import GridView from "./components/gridView";

function App() {
  const { entities } = useJaneHopkins();
  const [format, setFormat] = useState("list");

  const addPatient = async () => {
    const addPatientResponse = await entities.patient.add({
      name: "Test Person",
      dob: "January 17th, 1990",
      insuranceNumber: "123456789",
    });
    console.log(addPatientResponse);
  };

  return (
    <div style={{ height: "100vh" }} className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h2" color="inherit" component="div">
            PharmaStudy
          </Typography>
          <div style={{ position: "relative", top: "120px", right: "350px" }}>
            <Button variant="contained" onClick={() => addPatient()}>
              Add Patient
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Typography
        component="h5"
        variant="h3"
        align="center"
        color="white"
        bgcolor="blue"
      >
        Patients
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={4} justifyContent="center">
        {format === "list" ? (
          <div>
            <Button
              variant="contained"
              style = {{marginRight: '8px'}}
              onClick={() => {
                setFormat("list");
              }}
            >
              List
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setFormat("grid");
              }}
            >
              Grid
            </Button>
          </div>
        ) : (
          <div>
            <Button
            style = {{marginRight: '8px'}}
              variant="contained"
              onClick={() => {
                setFormat("list");
              }}
            >
              List
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setFormat("grid");
              }}
            >
              Grid
            </Button>
          </div>
        )}
      </Stack>

      <Box
        sx={{ bgcolor: "#8EA7E9", pt: 8, pb: 12, borderTop: "2px solid blue" }}
      >
        <Typography style={{ color: "white", marginLeft: 60 }}>
          {format === "list" ? (
            <ListView />
  ): (
    <GridView />
  )}
        </Typography>
      </Box>
    </div>
  );
}

export default App;

//<Button variant="contained" onClick={() => {setFormat("list")}}>List</Button>
//<Button variant="contained" onClick={() => {setFormat("grid")}}>Grid</Button>
