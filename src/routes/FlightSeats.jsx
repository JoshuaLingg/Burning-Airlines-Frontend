import Navbar from "../components/Navbar";
import SeatSelection from "../components/SeatSelection";

function FlightSeats() {
  return (
    <div className="container">
      <Navbar />

      <SeatSelection />
      <p>Seat selection is coming soon</p>
    </div>
  );
};

export default FlightSeats;