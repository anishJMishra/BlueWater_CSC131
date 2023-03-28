import Navbar from './Navbar';
import Home from './Home';
import logo from './logo.svg';
import './StudyPage.css';
import useJaneHopkins from './hooks/useJaneHopkins';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrackProgress from './TrackProgress';
import ViewPatientData from './ViewPatientData';

function StudyPage() {
  const {entities} = useJaneHopkins();

  const addPatient = async() => {
    const addPatientResponse = await entities.patient.add({
      name: "Test Person",
      dob: "January 17th, 1990",
      insuranceNumber: "123456789"
    });
    console.log(addPatientResponse);
  }

  return (
    <Router>    
      <div className="StudyPage">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/TrackProgress">
              <TrackProgress />
            </Route>
            <Route path="/ViewPatientData">
              <ViewPatientData />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default StudyPage;

// <div className="App">
    //  <button onClick={() => addPatient()}>Add Patient</button>
    // </div>