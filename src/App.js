import { useState, useEffect } from 'react'
import styles from './App.module.css'

const Mob = require('./Mob')

function App() {
  const [mob, setMob] = useState(null)
  const [participant, setParticipant] = useState('')
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    setMob(new Mob())
    setParticipants([])
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
    <div className={styles.App}>
      <div></div>
      <input
        data-testid='participant-input'
        value={participant}
        onChange={e => setParticipant(e.target.value)}
        onKeyDown={handleEnter}
        className={styles.input}
        placeholder='Participant Name...'
      ></input>
      <div data-testid='participant-list' className={styles.list}>
        {participants.map((participant, index) => (
          <li key={index} className={styles.item}>
            {participant}
          </li>
        ))}
      </div>
    </div>
  )
}

export default App
