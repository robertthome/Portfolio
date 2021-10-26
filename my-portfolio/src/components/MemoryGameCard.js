import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrHeroku } from 'react-icons/gr'
import memorygame from '../images/memorygame.png'

function MemoryGameCard() {
  return (
    <div className="memory-card">
      <div className="memory-main">
        <h1 className="proj-title">Memory Game</h1>
        <img className="memory-game" src={memorygame} alt="project website" />
      </div>
      <div className="project-socials">
        <a className="github" href="https://github.com/robertthome/Memory-Game">
          <AiFillGithub size={75} />
        </a>
        <a className="heroku" href="https://robert-thome-memory-game.surge.sh/">
          <GrHeroku size={75} />
        </a>
      </div>
    </div>
  )
}

export default MemoryGameCard
