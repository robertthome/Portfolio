import React from "react";
import RecipeBookCard from "../components/RecipeBookCard";
import MemoryGameCard from "../components/MemoryGameCard";

function Projects() {
  return (
    <div >
      <h1 className='proj-h1'>PROJECTS 2021</h1>
      <div className='projects'>
      <RecipeBookCard />
      <MemoryGameCard />
      </div>
    </div>
  );
}

export default Projects;
