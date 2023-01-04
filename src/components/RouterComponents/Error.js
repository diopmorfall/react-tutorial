import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <h1>Error 404: page not found</h1>
            <Link to="/">Back home</Link>
        </div>
    );
}
