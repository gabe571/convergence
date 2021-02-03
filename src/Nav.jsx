import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const Nav = () => {

return (
    <div className="navbar">
<ul>
 <ul>
   <NavLink to='/home'>CONVERGENCE</NavLink>
   </ul>
   <ul>
   <NavLink to='/GameTrailer'>TRAILERS</NavLink>
   </ul>
</ul>
    </div>
)
}

export default withRouter(Nav);