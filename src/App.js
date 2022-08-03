import { useState } from 'react'
import './App.css'

function App() {
  const [participant, setParticipant] = useState('')
  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      //call function join from Mob
      //reset the input box
    }
  }
  return (
    <div className='App'>
      <input
        data-testid='participant-input'
        value={participant}
        onChange={e => setParticipant(e.target.value)}
        onKeyDown={handleEnterKey}
      ></input>
      <div data-testid='participant-list'></div>
    </div>
  )
}

export default App
