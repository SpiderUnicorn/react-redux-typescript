import React from 'react'
import { Link } from 'react-router'

const App = (props) => (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container col-sm-6">
                <ul className="nav navbar-nav">
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>

        <main className="container col-sm-6">
            {props.children}
        </main>
    </div>
)

export default App
