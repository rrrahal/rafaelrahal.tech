import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import './PaperSheet.css'
import './PaperAnimations.css'

export const PaperSheet = () => {
  return (
    <div className="paper-container">
      <div className="paper">
        <div className="title" role="textbox">
            Hello <span role="img" aria-label="waving-hand">👋</span>
        </div>
        <div className="first-paragraph" role="textbox">
            I'm a Brazilian/Italian Software Enginner, currently working for Talkdesk.
        </div>
        <div className="second-paragraph" role="textbox">
            I worked on QuintoAndar and Geekie which are great tech companies in Brazil, on those internships I learned that
            my passion is to use technology in the best possible to change people's live in a good way.
        </div>
        <div className="third-paragraph" role="textbox">
            I've been living in Portugal for almost a year, finishing my master's at Instituto Superior Técnico.
            I also attended Escola Politécnica da USP in São Paulo, Brazil.
        </div>
        <div className="fourth-paragraph" role="textbox">
            Full-Stack Web Development alongside with functional programing have been my main interests in recent times.
            I try to write about things that I'm learning in my blog.
        </div>
        <div className='links-container'>
          <div className="links" role="textbox">
            <div className="contact-me-section">
            Contact me:
              {<FontAwesomeIcon icon={faGithub} className="icon" color="#282828" />}
              {<FontAwesomeIcon icon={faLinkedin} className="icon"  />}<br/>
            </div>
              download my CV here, and also check my blog.
          </div>
        </div>
      </div>
    </div>
  )

}
