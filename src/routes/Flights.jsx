import Navbar from "../components/Navbar";
import FlightInput from "../components/FlightInput";
import FlightDisplay from "../components/FlightDisplay";
import FlightSearch from "../components/FlightSearch";

function Flights() {
  return (
    
    <div className="container">
      <Navbar />
      <FlightInput formType="create"/>
      <FlightDisplay /> 
      <FlightSearch />

  

      <p>Flight input for creating and Flight display are coming soon</p>

    </div>

    
  );
};

export default Flights;
