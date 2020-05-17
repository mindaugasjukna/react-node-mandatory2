import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            </ul>
            <ul>
                <Link to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
            </ul>
            <ul>
                <Link to={`${process.env.PUBLIC_URL}/pokemons`}>See the pokemon here!</Link>
            </ul>
        </nav>
    )
}

export default Navbar;