import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

const navStyle = {
    color: 'black'
}

 return (
    <nav>
     <ul className="nav-links">
        <Link to={'/topgames'}>
            <ul>Top Games</ul>
        </Link>
        <Link style={navStyle} to={'/search'}>
            <ul>Search</ul>
        </Link>
     </ul>
    </nav>
 );
}

export default Nav;