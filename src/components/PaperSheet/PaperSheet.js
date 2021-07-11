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
             Software Engineer, currently working for
            <RoughNotation animationDelay="3500" show type="highlight" color="#BF91FC">
             <a href="https://www.talkdesk.com/" rel="noopener noreferrer" target="_blank"> Talkdesk.</a>
            </RoughNotation>
        </div>
        <div className="second-paragraph" role="textbox">
        My experiences are with both frontend and backend development and
         my true passion is to help products that change lives and are a delight to people's eyes.
        </div>
        <div className="third-paragraph" role="textbox">
        I'm always trying to learn new things but lately
        I've been into the React ecosystem and functional programming. I also love cooking and sports.
        </div>
        <div className="fourth-paragraph" role="textbox">
        My college education was done both in Brazil and in Portugal.
        I've been living in Europe since September of 2020 and I'm always willing to take on a new challenge and get out of my comfort zone.        </div>
        <div className='links-container'>
          <div className="links" role="textbox">
            <div className="contact-me-section">
            Feel free to reach me anytime:
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
