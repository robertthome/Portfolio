import React from "react";

import Nav from "../components/Nav";

import './Home.css'

const Home = () => {
  return (
    <div className='nav-bar'>
      <div>
        <p className='typewriter'>Hello, I am Robert Thome.</p> 
      </div>
      <Nav />
    </div>
  )
}

export default Home