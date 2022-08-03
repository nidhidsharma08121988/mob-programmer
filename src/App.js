import { useState } from 'react'
import './App.css'

const Mob = require('./Mob')

function App() {
  return (
    <div className='App'>
      <input data-testid='participant-input'></input>
      <div data-testid='participant-list'></div>
    </div>
  )
}

export default App
