import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import './PaperSheet.css'

export const PaperSheet = () => {
  return (
    <div className="paper-container">
      <div className="paper">
        <div className="title" role="textbox">
            Hello,
        </div>
        <div className="first-paragraph" role="textbox">
            I'm a Brazilian/Italian Software Enginner, currently working for Talkdesk.
        </div>
        <div className="second-paragraph" role="textbox">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illo et cumque animi cum delectus adipisci illum laboriosam explicabo, voluptatem ab?
        </div>
        <div className="links" role="textbox">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            {<FontAwesomeIcon icon={faGithub} className="icon" />}
            {<FontAwesomeIcon icon={faLinkedin} className="icon" />}
        </div>
      </div>
    </div>
  )

}
