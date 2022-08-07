import { useState, useEffect } from 'react'
import styles from './App.module.css'

const Mob = require('./Mob')

function App() {
  const [mob, setMob] = useState(null)
  const [minutes, setMinutes] = useState('15')
  const [seconds, setSeconds] = useState('00')
  const [participant, setParticipant] = useState('')
  const [participants, setParticipants] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)

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

  const handleMobbing = e => {
    //start timer for set minutes and seconds
    //disable the inputs
    //convert start mob to reset button
    //after that time expires: clear the timer and rotate mob
  }

  return (
    <div className={styles.App}>
      <div className={styles.header}>Mob Programming Host</div>
      <div className={styles.participant_timer}>
        <div className={styles.participant_panel}>
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
        <div className={styles.timer}>
          <div>
            <input
              className={styles.minutes}
              value={minutes}
              placeholder='00'
              type='number'
              onChange={e => setMinutes(e.target.value)}
              maxLength={2}
              min='00'
              max='20'
              disabled={isDisabled}
            ></input>
            <label className={styles.colon}>:</label>
            <input
              className={styles.seconds}
              value={seconds}
              placeholder='00'
              type='number'
              onChange={e => setSeconds(e.target.value)}
              maxLength={2}
              min='00'
              max='59'
              disabled={isDisabled}
            ></input>
          </div>
          <div>
            <button className={styles.startMob} onClick={handleMobbing}>
              Start Mob
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
