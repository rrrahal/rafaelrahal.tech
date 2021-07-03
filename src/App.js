import React from 'react'

import { Polaroid } from './components/Polaroid/Polaroid'
import { PaperSheet } from './components/PaperSheet/PaperSheet'

import './App.css'

export const App = () => {
  return (<div className="App">
    <Polaroid />
    <PaperSheet />
  </div>)
}
