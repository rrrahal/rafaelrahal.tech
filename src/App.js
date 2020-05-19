import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import './App.css';

function App() {
  const phrases = [
    "I'm a Computer Engineering Student",
    "I like turning code into real stuff",
    "I also enjoy web development very much",
    "(Especially front-end)",
    "I'm always trying to learn new things",
    "Find me and say Hello (:"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }, 2800);
  }, [phraseIndex])

  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="greeting">
            Hi, I'm Rafael!
        </div>
        <div className="titles-container">
          <div className="title">
           {phrases[phraseIndex]}
          </div>
        </div>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
}

export default App;
