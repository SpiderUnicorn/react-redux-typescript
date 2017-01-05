import React from 'react';
import { Link } from 'react-router';

/** The structure of the application. Includes navigation for all routes. */
export const App = (props) => (
    <main className="container">
        <nav className="nav nav-inline" role="navigation">
            <Link to="/recipes" className="nav-link">Recipes</Link>
            <Link to="/about" className="nav-link">About</Link>
        </nav>
        <br/>

        {props.children}
    </main>
);
