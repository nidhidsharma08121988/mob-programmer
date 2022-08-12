import { useState, useEffect } from 'react'

export const countTimeInMs = (minutes, seconds) =>
  minutes * 60 * 1000 + seconds * 1000

const useCountDown = (initMin, initSec) => {
  const [minutes, setMinutes] = useState(initMin)
  const [seconds, setSeconds] = useState(initSec)
  const [timerID, setTimerID] = useState(0)
  const [timeInMS, setTimeInMS] = useState(0)

  const clearCountDown = () => {
    clearInterval(timerID)
    setMinute(0)
    setSecond(0)
  }

  useEffect(() => {
    setTimeInMS(countTimeInMs(minutes, seconds))
  }, [minutes, seconds])

  const setMinute = newMin => {
    setMinutes(newMin)
  }
  const setSecond = newSec => {
    setSeconds(newSec)
  }

  const startCountDown = () => {
    const isTimerNotStartedAndMinOrSecAreNonZero =
      !timerID && (minutes > 0 || seconds > 0)

    if (isTimerNotStartedAndMinOrSecAreNonZero) {
      const id = setInterval(displayMinutesAndSeconds, 1000)
      setTimerID(id)
    }
  }

  let counter = 0
  const displayMinutesAndSeconds = () => {
    counter = counter + 1
    const newTimeInMs = timeInMS - 1000 * counter
    if (newTimeInMs > 0) {
      const newMin = Math.floor(newTimeInMs / 1000 / 60)
      const newSec = Math.floor((newTimeInMs / 1000) % 60)

      setMinute(newMin)
      setSecond(newSec)
      return
    } else {
      clearCountDown()
      return
    }
  }

  return [
    minutes,
    setMinute,
    seconds,
    setSecond,
    startCountDown,
    clearCountDown,
  ]
}

export default useCountDown
