import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const Nav = () => {

const navStyle = {
    color: ''
}

 return (
    <nav>
     <ul className="nav-links">
         <Link to={'/home'}>
         <ul>HOME</ul>
         </Link>
        <Link to={'/topgames'}>
            <ul>Top Games</ul>
        </Link>
        <Link style={navStyle} to={'/search'}>
            <ul>Search</ul>
        </Link>
        <Link style={navStyle} to={'/Login'}>
            <ul>Login</ul>
        </Link>
        <Link style={navStyle} to={'/SignUp'}>
            <ul>Sign Up</ul>
        </Link>
        <Link style={navStyle} to={'/Logout'}>
            <ul>Logout</ul>
        </Link>
     </ul>
    </nav>
 );
}

export default withRouter(Nav);