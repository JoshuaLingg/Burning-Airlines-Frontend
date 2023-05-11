import { useState } from "react";
import axios from "axios";
const SERVER_URL = 'http://localhost:3000/flights.json';

function FlightInput( props ) {
  const [ flight, setFlight ] = useState('');
  const [ date, setDate ] = useState('');
  const [ origin, setOrigin ] = useState('');
  const [ dest, setDest ] = useState('');
  const [ plane, setPlane ] = useState('');
  // const [ flights, setFlights ] = useState('');

  const _handleSubmit = ( e ) => {
    e.preventDefault();
    if ( props.formType==='create' ) {
      props.onSubmit( [flight, date, origin, dest, plane] );
      console.log( `Creating: ${flight}, ${date}, ${origin}, ${dest}, ${plane}`);
    } else {
      props.onSubmit( [origin, dest] );
      console.log( `Creating: ${origin}, ${dest}`);
    }
    setFlight('');
    setDate('');
    setOrigin('');
    setDest('');
    setPlane('');
  };

  const _handleInputFlight = ( e ) => {
    setFlight( e.target.value );
  ;}
  const _handleInputDate = ( e ) => {
    setDate( e.target.value );
  ;}
  const _handleInputOrigin = ( e ) => {
    setOrigin( e.target.value );
  ;}
  const _handleInputDest = ( e ) => {
    setDest( e.target.value );
  ;}
  const _handleInputPlane = ( e ) => {
    setPlane( e.target.value );
  ;}



  // const fetchFlgiths = () => {
  //   axios(SERVER_URL).then((response) => {
  //     response.data.map((value) => {
  //       if ( origin === value.origin ) {
  //         setFlights(flights);
  //       };
  //     });
  //   });
  // };

  // useEffect(fetchFlgiths, []); 
 
  return (
    <div>
      <form onSubmit={ _handleSubmit }>
        { props.formType==='create' &&
          <input type="text" onInput={ _handleInputFlight } required placeholder="Flight #" value={ flight }/> &&
          <input type="text" onInput={ _handleInputDate } required placeholder="Date" value={ date }/>
        }

        <input type="text" onInput={ _handleInputOrigin } required placeholder="From" value={ origin }/>
        <input type="text" onInput={ _handleInputDest } required placeholder="To" value={ dest }/>
        
        { props.formType==='create' &&
          <input type="text" onInput={ _handleInputPlane } required placeholder="Plane" value={ plane }/>
        }

        <input type="submit" value={ props.formType } />
      </form>
    </div>
  );
};

export default FlightInput;