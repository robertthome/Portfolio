import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <div className="nav-links">
      <div>
        <NavLink className="about" to="/about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink className="projects" to="/projects">
          Projects
        </NavLink>
      </div>
      <div>
        <NavLink className="contact" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
