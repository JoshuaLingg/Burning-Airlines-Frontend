import { useState } from "react";

function FlightInput() {


  return(
    <div>
      <form onSubmit={ _handleSubmit }>
        <input type="text" onInput={ _handleInput } required value={ flight }/>
        <input type="submit" value="Tell" />
      </form>
    </div>
  );
};

export default FlightInput;