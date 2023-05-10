function FlightSearch() {
    const flights = [
      {
        Date: '3/1/13',
        Flight: 23,
        FromTo: 'JFK > SFO',
        Plane: 757,
      }
    ]
    return (
      <div>
        <h1>Flights</h1>
        <table>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From > To</th>
            <th>Plane</th>
          </tr>
          <tr>
            <td>{flights[0].Date}</td>
            <td>{flights[0].Flight}</td>
            <td>{flights[0].FromTo}</td>
            <td>{flights[0].Plane}</td>
          </tr>
   
        </table>
      </div>
    );
  };
  
  export default FlightSearch;