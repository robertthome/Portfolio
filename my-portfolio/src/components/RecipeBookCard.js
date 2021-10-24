import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrHeroku } from 'react-icons/gr'
import recipebook from '../images/recipebook.jpeg'

function RecipeBookCard() {
  return (
    <div className="recipe-card">
      <div className="recipe-main">
        <h1>Recipe Book</h1>
        <img className="recipe" src={recipebook} alt="project website" />
      </div>
      <div className="recipe-socials">
        <a href="https://github.com/robertthome/RecipeBook">
          <AiFillGithub size={75} />
        </a>
        <a href="https://616d8fc872b9070008fdd60d--wonderful-pare-2a1eec.netlify.app/">
          <GrHeroku size={75} />
        </a>
      </div>
    </div>
  )
}

export default RecipeBookCard
