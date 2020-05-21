import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { usePageVisibility } from 'react-page-visibility';
import shortid from "shortid";


import './App.css';

const makeId = () => {
  return shortid.generate();
}

function App() {
  const phrases = [
    "I'm a Computer Engineering Student",
    "I like turning code into real stuff",
    "I also enjoy web development",
    "(especially front-end)",
    "I'm always trying to learn new things",
    "Find me and say hello (:"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [userHasSeen, setUserHasSeen] = useState(false);
  const isVisible = usePageVisibility()
  
  useEffect(() => {
    if (!userHasSeen) {
      setUserHasSeen(isVisible);
      setPhraseIndex(0);
    }
  }, [isVisible, userHasSeen])

  useEffect(() => {
    if (phraseIndex < phrases.length) {
      setTimeout(() => {
        setPhraseIndex((phraseIndex + 1));
      }, 3000);
    }
  }, [phraseIndex, phrases])


  const summary = () => (
    <div className="summary">
      <div className="summary-item">Computer Engineering Student</div>
      <div className="summary-item">Web Development Enthusiast</div>
      <div className="summary-item">Lifelong Learner</div>
    </div>
  )

  return ( userHasSeen &&
    <div className="App">
      <div className="content-wrapper">
        <div className="greeting">
            Hi, I'm Rafael!
        </div>
        {
          phraseIndex < phrases.length ? 
          (
          <div className="titles-container slide-out" key={makeId()}>
            <div className="title" key={makeId()}>
            {phrases[phraseIndex]}
            </div>
          </div>
        ) :
        summary()
        }
        {
          phraseIndex >= phrases.length - 1 &&
          <div className="links">
          <div className="link">
            <a href="https://www.github.com/rrrahal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} inverse size="3x" className="icon" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.twitter.com/rafael_rahal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} inverse size="3x" className="icon" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/rafaelrahal/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} inverse size="3x" className="icon" />
            </a>
          </div>
        </div>

        }
      </div>
    </div>
  );
}

export default App;
