import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

const navStyle = {
    color: ''
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
        <Link style={navStyle} to={'/reviews'}>
            <ul>Reviews</ul>
        </Link>
     </ul>
    </nav>
 );
}

export default Nav;