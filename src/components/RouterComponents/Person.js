import React from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';

import Players from '../Players';

export default function Person() {
    const [name, setName] = React.useState('default');
    console.log(useParams());
    let { id } = useParams();
    id = id.substr(1, 2);
    React.useEffect(() => {
        const person = Players.find((player) => player.jersey === parseInt(id));
        console.log(person);
        setName(person.name);
    }, []);

    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people">Back to people</Link>
        </div>
    );
}
