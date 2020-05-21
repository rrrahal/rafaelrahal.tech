import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import shortid from "shortid";


import './App.css';

const makeId = () => {
  return shortid.generate();
}

function App() {
  const phrases = [
    "I'm a Computer Engineering Student",
    "I like turning code into real stuff",
    "I also enjoy web development very much",
    "(especially front-end)",
    "I'm always trying to learn new things",
    "Find me and say hello (:"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }, 2800);
  }, [phraseIndex, phrases])

  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="greeting">
            Hi, I'm Rafael!
        </div>
        <div className="titles-container">
          <div className="title" key={makeId()}>
           {phrases[phraseIndex]}
          </div>
        </div>
        <div className="links">
          <div className="link">
            <a href="https://www.github.com/rrrahal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.twitter.com/rafael_rahal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/rafaelrahal/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
