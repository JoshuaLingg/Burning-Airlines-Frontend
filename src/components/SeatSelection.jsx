import { useState } from "react";

import Seat from "./Seat";

function SeatSelection() {
  const seatArr = [];
  
  const seatLayout = (rows, columns) => {
    for (let i = 0; i < rows; i++) {
      seatArr.push([]);
      for (let j = 0; j < columns; j++) {
        seatArr[i].push(`row${i} column${j}`);
      }
    }
  };

  seatLayout(2,2);

  const [seat, setSeat] = useState(seatArr);

  const seats = seatArr.map((value, index) => {
    return( <div>
        {value.map((seat, seatIndex) => {
          return <Seat name="" user="BOB" />
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