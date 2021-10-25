import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Nav
