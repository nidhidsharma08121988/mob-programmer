import './App.css'
import { useState, useEffect } from 'react'
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
    <div className='participant_panel'>
      <input
        data-testid='participant-input'
        value={participant}
        onChange={e => setParticipant(e.target.value)}
        onKeyDown={handleEnter}
        className='input'
        placeholder='Participant Name...'
      ></input>
      <div data-testid='participant-list' className='list'>
        {mob &&
          mob.participants().map((participant, index) => (
            <li key={index} className={`item item_${index}`}>
              {index === 0 && <div style={{ fontSize: 'x-small' }}>Driver</div>}
              {index === 1 && (
                <div style={{ fontSize: 'x-small' }}>Navigator</div>
              )}
              <div className='participant-name'>{participant}</div>
            </li>
          ))}
      </div>
    </div>
  )

  return (
    <div className='App'>
      <div className='header'>Mob Programming Host</div>
      <div className='participant_timer'>
        {participantPanel}
        <div className='timer'>
          <div>
            <input
              className='minutes'
              placeholder='00'
              type='number'
              maxLength={2}
              value={minutes}
              onChange={e => setMinutes(e.target.value)}
              min='0'
              max='15'
              disabled={isTimerOn}
            ></input>
            <label className='colon'>:</label>
            <input
              className='seconds'
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
            {!isTimerOn && (
              <button className='startMob' onClick={handleMobbing}>
                Start Mob
              </button>
            )}
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
