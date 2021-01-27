import React from 'react'
import { Link } from 'react-router-dom';

const LoginNav = () => {



 return (
    <nav>
     <ul className="nav-login">
        <Link>
            <ul>Login</ul>
        </Link>
        <Link>
            <ul>Logout</ul>
        </Link>
     </ul>
    </nav>
 );
}

export default LoginNav;