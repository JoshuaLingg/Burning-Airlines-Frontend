import { useState } from "react";

function Seat(props) {
  const [value, setValue] = useState(props.name === 'false' ? 'avail': props.name);

  const _handleClick = (e) => {
    setValue(props.user);
  };

  return (
    <button onClick={_handleClick}>{value}</button>
  );
};

export default Seat;