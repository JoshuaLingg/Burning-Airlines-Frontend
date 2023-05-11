import FlightInput from "../components/FlightInput";
import FlightDisplay from "../components/FlightDisplay";
import Navbar from "../components/Navbar";

function Search() {
  return (
    <div className="container">
      <Navbar />

      <FlightInput formType="search"/>
      <FlightDisplay />
    </div>
  );
};

export default Search;