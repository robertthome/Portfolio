import React from 'react'
import RobertsResume from '../assets/RobertsResume.pdf'

function Resume() {
  return (
    <div>
      <a href={RobertsResume} download>
        {' '}
        <button>Click here to view my resume</button>
      </a>
    </div>
  )
}

export default Resume
