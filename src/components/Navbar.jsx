function Navbar() {
  return(
    <div>
      <a href="/" className="nav-button"> Home</a>
      <a href="/flights" className="nav-button"> Flights</a>
      <a href="/search" className="nav-button"> Search</a>
      <a href="/flight/1" className="nav-button"> FlightSeats</a>
    </div>
  );
};

export default Navbar;