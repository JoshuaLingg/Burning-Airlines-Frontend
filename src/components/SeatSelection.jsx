import { useState, useEffect } from "react";
import axios from "axios";

import Seat from "./Seat";

const SERVER_AIRPLANE_URL = "http://localhost:3000/airplanes.json";
const SERVER_RESERVATION_URL = "http://localhost:3000/reservations.json";
const SERVER_FLIGHTS_URL = "http://localhost:3000/flights.json";

const ALPHABETS = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
}

let airplaneName = 747;
let airplaneID = 0;
let flightID = 0;

function SeatSelection() {
  const [seatsArr, setSeatsArr] = useState([]);

  
  const fetchAirplane = () => {
    axios(SERVER_AIRPLANE_URL).then((response) => {
      response.data.map((value) => {
        if (value.name === airplaneName) {
          setSeatsArr(seatLayout(value.row, value.column));
          airplaneID = value.id;
        }
      });
    }).then(() => {
      axios(SERVER_FLIGHTS_URL).then((response) => {
        response.data.map((value) => {
          if (airplaneID === value.airplane_id) {
            flightID = value.id;
          }
        });
      }).then(() => {
        axios(SERVER_RESERVATION_URL).then((response) => {
          response.data.map((value) => {
            if (flightID === value.flight_id) {
              const seat = value.seat;
              let [row, column] = seat.split(/(?<=\d)(?=\D)/);
              column = ALPHABETS[column.toLowerCase()];
            }
          });
        });
      });
    });
  };

  useEffect( fetchAirplane, []);


  const seatLayout = (rows, columns) => {
    let seatArr = [];
    for (let i = 0; i < rows; i++) {
      seatArr.push([]);
      for (let j = 0; j < columns; j++) {
        seatArr[i].push('false');
      }
    }
    return seatArr;
  };

  

  const [seat, setSeat] = useState(seatsArr);

  const seats = seatsArr.map((value, index) => {
    return( <div>
        {value.map((seat, seatIndex) => {
          return <Seat id = {Math.random*100000} name={seat} user="BOB" />
        })}
      </div>
    );
  });

  return (
    <div>
      seats selction
      {seats}
    </div>
  );
};

export default SeatSelection;