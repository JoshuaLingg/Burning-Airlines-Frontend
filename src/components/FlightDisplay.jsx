import axios from "axios";
import { useState, useEffect } from "react";

const Server_Url = 'http://localhost:3000/reservations.json'

function FlightDisplay() {
  const [flights, setFlights] = useState([]);

  const fetchFlights = () => {
    axios(Server_Url).then((response) => {
     setFlights(response.data) 
  })
  }
  useEffect(fetchFlights, [])
  
  
  return (
    <div>
     <FlightsList flights={flights} />
    </div>
  )
}
const FlightsList = (props) => {
  return (
      <div>
         <h1>Flights</h1>
      <table>
        
        <thead>
          <tbody>
          <th>Date</th>
          <th>Flight</th>
          <th>From {">"} To</th>
          <th>Plane</th>
          <th>Seat</th>
          </tbody>
        </thead>
       {props.flights.map((f) => {
        return (
        <tbody key={f.id}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{f.seat}</td>
        </tbody>
        )
       })}
   
        
        
 
      </table>
      </div>
  );
};


export default FlightDisplay;