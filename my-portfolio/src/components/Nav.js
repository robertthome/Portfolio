import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Nav
