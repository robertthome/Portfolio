import React from 'react'

import { NavLink } from "react-router-dom";

import propic from '../images/propic.jpeg'

import './About.css'

const About = () => {
  return (
    <div>
    <NavLink to='/'>T|-|0M3</NavLink>
    <div className='hero-section'>
      <img src={propic} alt="Our hero" className='hero-pic' />
      <div className='hero-description'>
      <h1 className='hero-name'>Robert Thome</h1>
      <p className='hero-text'>I am a Software Engineer with a background in Culinary Arts. This last year has been challenging but I am also fortunate since I finally had a chance to pursue a dream of mine, web development. The skills I have learned from my career as a chef, such as attention to detail and the ability to think under pressure, has helped me in my pursuit of a new career in tech. Though I am familiar with building full stack applications, my passion is in front-end development. My goal is to create beautiful and responsive websites that are user friendly. A future goal of mine is to attend college to receive a bachelor's degree in Computer Science.</p>
      </div>
    </div>
    </div>
  )
}

export default About
