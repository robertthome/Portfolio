import React from "react";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Resume from "../components/Resume";
function Contact() {
  return (
    <div className='contacts'>
      <h1>CONTACT</h1>
      <div className='contact-socials'>
      <a href="https://github.com/robertthome">
        <AiFillGithub size={75}/>
      </a>
      <a href="https://www.linkedin.com/feed/">
        <AiFillLinkedin size={75}/>
      </a>
      </div>
      <Resume />
    </div>
  );
}

export default Contact;
