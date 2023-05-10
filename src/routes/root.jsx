import { useState } from "react";

export const Root = ( props ) => {
    const usernames = {
        1: 'Tom',
        2: 'James'
    };
    
    const [ username, setUser ] = useState('');


    // const fetchUser = () => {

    const _handleSubmit = ( e ) => {
        e.preventDefault();
        props.onSubmit( username );
    }

    const _handleInput = (e) => {
        setUser(e.target.value);
    };

    return (
        <div className="container">
            
            <h1>Welcome to Burning Airline</h1>

            <form onSubmit={ _handleSubmit }>
                <input type="search" required autoFocus placeholder="Enter your name" onInput={ _handleInput } />
                <input type="submit" value={ `Get ${ username } account` } />
            </form>
            <br />
            <p>Temporary shortcut</p>
            <a href="/flights" className="nav-button"> Flights</a>

        </div>
    );
};
