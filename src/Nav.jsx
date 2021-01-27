import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const Nav = () => {

return (
    <div className="navbar">
<ul>
 <ul>
   <NavLink to='/home'>Convergence</NavLink>
   </ul>
   <ul>
   <NavLink to='/TopGames'>Top Games</NavLink>
   </ul>
   <ul>
   <NavLink to='/Search'>Search</NavLink>
   </ul>
</ul>
    </div>
)
}

export default withRouter(Nav);