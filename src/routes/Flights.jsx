import Navbar from "../components/Navbar";
import FlightDisplay from "../components/FlightDisplay"
import FlightSearch from "../components/FlightSearch";

function Flights() {
  return (
    
    <div className="container">
      <Navbar />
      <FlightDisplay /> 
      <FlightSearch />

  

      <p>Flight input for creating and Flight display are coming soon</p>

    </div>

    
  );
};

export default Flights;
