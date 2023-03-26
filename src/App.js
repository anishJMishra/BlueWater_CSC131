// import logo from "./logo.svg";
import "./App.css";
import useJaneHopkins from "./hooks/useJaneHopkins";
import { AppBar, Toolbar, IconButton, Typography, Stack }
from "@mui/material";
import { useState } from "react";
// import ListView from "./components/listView";
// import GridView from "./components/gridView";
import OrganizationButtons from "./components/OrganizationButtons";
import FDAIcon from "./images/fda-logo.jpeg";
import JHIcon from "./images/JaneHopkins.jpg";
import BavariaIcon from "./images/Bavaria.jpg";

function App() {
  
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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
          {/* <div style={{ position: "relative", top: "120px", right: "350px" }}>
            <Button variant="contained" onClick={() => addPatient()}>
              Add Patient
            </Button>
          </div> */}
        </Toolbar>
      </AppBar>
          <Typography
            sx = {{
              pt: 10
            }}
            align = "center"
            variant = "h4"
          >
            Welcome. Choose an organization below to login.
          </Typography>
        <Stack sx={{ pt: 10 }}
          direction = "row"
          justifyContent= "center"
          spacing = {7.5}
        >
          <OrganizationButtons name = "FDA" logo = {FDAIcon} />
          <OrganizationButtons name = "Jane Hopkins" logo = {JHIcon} />
          <OrganizationButtons name = "Bavaria" logo = {BavariaIcon} />

        </Stack>
      </div>
  );
}

export default App;

// Below code is from before I made OrganizationsButtons.jsx file.
// - Nicholas

// const { entities } = useJaneHopkins();
  // const [format, setFormat] = useState("list");

  // const addPatient = async () => {
  //   const addPatientResponse = await entities.patient.add({
  //     name: "Test Person",
  //     dob: "January 17th, 1990",
  //     insuranceNumber: "123456789",
  //   });
  //   console.log(addPatientResponse);
  // };

          {/* <Box>
            <Typography
              sx={{ color: "#fff", bgcolor: "#1b76d2" }}
              variant = "h4"
            >
              FDA
            </Typography>
            <Button
              sx = {{ bgcolor: "#003987" }}
              variant = "contained"
              onClick={handleOpen}
            >
              <Modal
                open = {open}
                onClose = {handleClose}
              >
                <Box 
                  position="absolute"
                  top = "30%"
                  left = "36%"
                  sx = {{
                    backgroundColor: "#003987"
                  }}
                  >
                  <LoginModal name = "FDA" />
                </Box>
              </Modal>
              <img src={FDAIcon} style={{ width: "200px",
              height: "150px" }}/>
            </Button>  
          </Box>

          <Box>
            <Typography
              sx = {{ color: "#fff", bgcolor: "#1b76d2" }}
              variant = "h4"
            >
              Jane Hopkins
            </Typography>
            <Button
              sx = {{ bgcolor: "#003987"}}
              variant = "contained"
              onClick={handleOpen}
            >
              <Modal
                open = {open}
                onClose = {handleClose}
              >
                <Box 
                  position="absolute"
                  top = "40%"
                  left = "36%"
                  sx = {{
                    backgroundColor: "#003987"
                  }}
                  >
                  <LoginModal name = "Jane Hopkins" />
                </Box>
              </Modal>
              <img src = {JHIcon} style = {{ width: "200px",
              height: "150px" }} />
            </Button>
          </Box>

          <Box>
            <Typography
              sx={{ color: "#fff", bgcolor: "#1b76d2" }}
              variant = "h4"
            >
              Bavaria
            </Typography>
            <Button
              sx = {{ bgcolor: "#003987" }}
              variant = "contained"
              //onClick={handleOpen}
            >
              <Modal
                //open = {open}
                //onClose = {handleClose}
              >
                <Box 
                  position="absolute"
                  top = "50%"
                  left = "36%"
                  sx = {{
                    backgroundColor: "#003987"
                  }}
                  >
                  <LoginModal name = "Bavaria" />
                </Box>
              </Modal>
              <img src = {BavariaIcon} style = {{ width: "200px",
              height: "150px" }} />
            </Button>
          </Box> */}


//  BELOW IS ANISH'S CODE FOR LIST AND GRID VIEW.
//  COMMENTED OUT TO WORK ON LOGIN COMPONENTS.
//    - NICHOLAS

      {/* <Typography
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
    </div>    // <-- THIS WAS PREVIOUS CLOSING TAG FOR STARTING
              // DIV AT TOP OF RETURN
  );          // <-- PREVIOUS CLOSING PARENTHESES FOR RETURN
} */}         // <-- PREVIOUS CLOSING CURLY BRACKET

{/* //<Button variant="contained" onClick={() => {setFormat("list")}}>List</Button>
//<Button variant="contained" onClick={() => {setFormat("grid")}}>Grid</Button> */}
