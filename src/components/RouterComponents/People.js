import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
//* useParams allows us to access the parameters

import Players from '../Players';

export default function People() {
    const [players, setPlayers] = React.useState(Players);
    return (
        <div>
            <h1>Blue Lock players</h1>
            {players.map(player => (
                <div key={player.jersey}>
                    <h5>{player.name}</h5>
                    <Link to={`/people/person/:${player.jersey}`}>Player stats</Link>
                </div>
            ))}
        </div>
        //! the url you're directing to with the link, must be the same defined in the route
    );
}
