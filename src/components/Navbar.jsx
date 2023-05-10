function Navbar() {
  return(
    <div>
      <ul className="nav-list">
        <li className="nav-button"><a href="/" >Home</a></li>
        <li className="nav-button"><a href="/flights">Flights</a></li>
        <li className="nav-button"><a href="/search">Search</a></li>
        <li className="nav-button"><a href="/flight/1">FlightSeats</a></li>
      </ul>
    </div>
  );
};

export default Navbar;