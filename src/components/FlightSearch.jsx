import { useState } from "react";
import axios from "axios";

function FlightSearch() {
    const allFlights = () => {
        const [flights, setFlights] = useState();
        const fetchFlights = () =>{
            axios().then()
        }
    }

    
    return (
      <div>
        <h1>Flight Search Result</h1>
        <table>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From {">"} To</th>
            <th>Plane</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
   
        </table>
      </div>
    );
  };
  
  export default FlightSearch;