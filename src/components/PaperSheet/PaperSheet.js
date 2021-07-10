import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { RoughNotation } from "react-rough-notation";


import './PaperSheet.css'
import './PaperAnimations.css'

export const PaperSheet = () => {
  return (
    <div className="paper-container">
      <div className="paper">
        <div className="title" role="textbox">
            Hello <span role="img" aria-label="waving-hand" className="emoji">👋</span>
        </div>
        <div className="first-paragraph" role="textbox">
            I'm a 
            <span role="img" aria-label="brazilian-flag" className="emoji"> 🇧🇷 </span>/
            <span role="img" aria-label="italian-flag" className="emoji"> 🇮🇹 </span>
             Software Enginner, currently working for
            <RoughNotation animationDelay="3500" show type="highlight" color="#BF91FC">
             <a href="https://www.talkdesk.com/" rel="noopener noreferrer" target="_blank"> Talkdesk.</a>
            </RoughNotation>
        </div>
        <div className="second-paragraph" role="textbox">
            I worked on QuintoAndar and Geekie which are great tech companies in Brazil, on those internships I learned that
            my passion is to use technology in the best possible way to change people's lives.
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
              {<a href="https://github.com/rrrahal" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="icon" color="#333" />
              </a>}
              {<a href="https://www.linkedin.com/in/rafaelrahal/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="icon" color="#0077b5"  />
              </a>} <br/>
              And you can also check my blog.
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
