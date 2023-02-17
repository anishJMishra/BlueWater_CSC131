import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';

function App() {
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
    <div className="App">
     <button onClick={() => addPatient()}>Add Patient</button>
    </div>
  );
}

export default App;
