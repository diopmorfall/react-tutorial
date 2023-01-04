import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Error from './Error';
import Home from './Home';
import People from './People';
import Person from './Person';

//* first I need to import every page I want to be navigable to

export default function RouterComponent() {
    return (
        //! pay attention, this is the version 6 syntax; the tutorial uses the version 5
        //* you should wrap your entire app into Router, this way it's accessible
        //? the exact parameter makes sure the url matches === the path
        //? (sometimes, the home page is always shown because it always matches the url, there's always going to be a /)

        //? the switch component (v5) allows us to only get the first component that matches the url
        //? in v6 paths are always checked to be exactly the same
        //? the navbar component is always shown, regardless of the page
        //* for the Person component, we set up a path with url parameters, that I can name how I want

        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/person/:id" element={<Person />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}
