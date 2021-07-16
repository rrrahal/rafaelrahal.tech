import React from 'react'
import splitbee from '@splitbee/web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

import './PaperSheet.css'
import './PaperAnimations.css'

export const PaperSheet = () => {

  const clickedBlogLink = () => {
    splitbee.track("Cliked Blog Link")
  }

  const clickedGithubLink = () => {
    splitbee.track("Cliked Github Link")
  }

  const clickedLinkedinLink = () => {
    splitbee.track("Cliked Linkedin Link")
  }

  return (
    <div className="paper-container">
      <RoughNotationGroup>
      <div className="paper">
        <div className="title" role="textbox">
            Hello <span role="img" aria-label="waving-hand" className="emoji">👋</span>
        </div>
        <div className="first-paragraph" role="textbox">
            I'm a
            <span role="img" aria-label="brazilian-flag" className="emoji"> 🇧🇷 </span>/
            <span role="img" aria-label="italian-flag" className="emoji"> 🇮🇹 </span>
             Software Engineer, currently working for
            <RoughNotation animationDelay="3500" show type="highlight" color="#BF91FC" order="1" padding={[0,0,0,0]}>
             <a href="https://www.talkdesk.com/" rel="noopener noreferrer" target="_blank"> Talkdesk.</a>
            </RoughNotation>
        </div>
        <div className="second-paragraph" role="textbox">
        My experiences are with both frontend and backend development and my true passion is to help{' '}
         <RoughNotation animationDelay="15000" show type="underline" color="#282828" order="2" multiline padding={[0, 5]}>
           products that change lives and are a delight to people's eyes.
          </RoughNotation>
        </div>
        <div className="third-paragraph" role="textbox">
        I'm always trying to
        <RoughNotation animationDelay="16000" show type="box" color="#282828" order="3" padding={[1, 1]} strokeWidth={0.4}>
        {' '} learn new things {' '}
          </RoughNotation>
        but lately
        I've been into the React ecosystem and functional programming. I also love cooking and sports.
        </div>
        <div className="fourth-paragraph" role="textbox">
        My college education was done both in Brazil and in Portugal.
        I've been living in Europe since September of 2020, I'm always willing to take on a new challenge and get{' '}
          <RoughNotation animationDelay="17000" show type="underline" color="#282828" order="4" multiline padding={[1, 1]} strokeWidth={0.5}>
          out of my comfort zone.
          </RoughNotation>
           </div>
        <div className='links-container'>
          <div className="links" role="textbox">
            <div className="contact-me-section">
              Feel free to reach me:
            <div className="icons-container">
              {<a href="https://github.com/rrrahal" rel="noopener noreferrer" target="_blank" onClick={clickedGithubLink}>
                <FontAwesomeIcon icon={faGithub} className="icon" color="#333" />
              </a>}
              {<a href="https://www.linkedin.com/in/rafaelrahal/" rel="noopener noreferrer" target="_blank" onClick={clickedLinkedinLink}>
              <FontAwesomeIcon icon={faLinkedin} className="icon" color="#0077b5"  />
              </a>}
              </div>
            </div>
            <div className="blog-phrase">
              <RoughNotation animate={false} show type="circle" color="#282828" order="5" padding={[1, 1]} strokeWidth={0.5}>
              <a href="https://blog.rafaelrahal.tech" rel="noopener noreferrer" target="_blank" onClick={clickedBlogLink}>
                Check out my blog too.
              </a>
              </RoughNotation>
            </div>
          </div>
        </div>
      </div>
      </RoughNotationGroup>
    </div>
  )
}
