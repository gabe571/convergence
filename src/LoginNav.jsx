import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginNav = () => {

 return (
    <div className="navlog">
<ul>
 <ul>
   <NavLink to='/Login'>Login </NavLink>
   <NavLink to='/SignUp'>Sign Up </NavLink>
   <NavLink to='/Logout'>Logout </NavLink>
   </ul>
</ul>
    </div>
 );
}

export default LoginNav;