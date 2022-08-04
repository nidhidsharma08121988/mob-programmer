import { useState, useEffect } from 'react'
import './App.css'

const Mob = require('./Mob')

function App() {
  const [mob, setMob] = useState(null)
  const [participant, setParticipant] = useState('')
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    setMob(new Mob())
  }, [])

  const handleEnter = e => {
    if (e.key === 'Enter') {
      mob.join(participant)
      setParticipant('')
      const newParticipants = [...participants, participant]
      setParticipants(newParticipants)
    }
  }

  return (
    <div className='App'>
      <input
        data-testid='participant-input'
        value={participant}
        onChange={e => setParticipant(e.target.value)}
        onKeyDown={handleEnter}
      ></input>
      <div data-testid='participant-list'>
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </div>
    </div>
  )
}

export default App
