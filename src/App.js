import { useState, useEffect } from 'react'
import styles from './App.module.css'
import useTimer from './useTimer'

const Mob = require('./Mob')

function App() {
  const [mob, setMob] = useState(null)
  const [participant, setParticipant] = useState('')
  const [
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    timeInMs,
    isTimerOn,
    startTimer,
  ] = useTimer()

  useEffect(() => {
    if (!mob) setMob(new Mob())
  }, [mob])

  const handleEnter = e => {
    if (mob) {
      if (e.key === 'Enter') {
        mob.join(participant)
        setParticipant('')
      }
    }
  }

  const handleMobbing = e => {
    if (!isTimerOn) {
      startTimerAndTimeout()
    }
  }

  const participantPanel = (
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
        {mob &&
          mob.participants().map((participant, index) => (
            <li key={index} className={styles.item}>
              {participant}
            </li>
          ))}
      </div>
    </div>
  )

  return (
    <div className={styles.App}>
      <div className={styles.header}>Mob Programming Host</div>
      <div className={styles.participant_timer}>
        {participantPanel}
        <div className={styles.timer}>
          <div>
            <input
              className={styles.minutes}
              placeholder='00'
              type='number'
              maxLength={2}
              value={minutes}
              onChange={e => setMinutes(e.target.value)}
              min='0'
              max='15'
              disabled={isTimerOn}
            ></input>
            <label className={styles.colon}>:</label>
            <input
              className={styles.seconds}
              placeholder='00'
              type='number'
              maxLength={2}
              value={seconds}
              onChange={e => setSeconds(e.target.value)}
              min='0'
              max='59'
              disabled={isTimerOn}
            ></input>
          </div>
          <div>
            <button
              className={styles.startMob}
              onClick={handleMobbing}
              disabled={isTimerOn}
            >
              Start Mob
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  function startTimerAndTimeout() {
    startTimer()
    setTimeout(() => {
      mob.rotate()
    }, timeInMs)
  }
}

export default App
