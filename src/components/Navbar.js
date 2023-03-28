import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Study Page</h1>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/TrackProgress">Track Progress</Link>
        <Link to="/ViewPatientData">View Patient Data</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;