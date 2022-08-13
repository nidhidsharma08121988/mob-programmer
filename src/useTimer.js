import { useState, useEffect } from 'react'

const getTimeInMilliSecond = (minutes, seconds) =>
  minutes * 60 * 1000 + seconds * 1000
const myInterval = (fn, timeInMs) => setInterval(fn, timeInMs)

const useTimer = () => {
  const [minutes, setMinute] = useState(0)
  const [seconds, setSecond] = useState(0)
  const [timeInMs, setTimeInMs] = useState(0)
  const [isTimerOn, setIsTimerOn] = useState(false)

  useEffect(() => {
    if (minutes > 0 || seconds > 0) {
      setTimeInMs(getTimeInMilliSecond(minutes, seconds))
    } else {
      setTimeInMs(0)
    }
  }, [minutes, seconds])

  const setMinutes = newVal => {
    setMinute(newVal)
  }
  const setSeconds = newVal => {
    setSecond(newVal)
  }
  const startTimer = () => {
    if (timeInMs > 0 && !isTimerOn) {
      setIsTimerOn(true)
      const id = myInterval(timerInterval, 1000)
      setTimeout(() => {
        clearTimer(id)
      }, timeInMs)
    }
  }
  let counter = 0
  const timerInterval = () => {
    counter = counter + 1
    const newTimeInMs = timeInMs - 1000 * counter
    if (newTimeInMs > 0) {
      const newMinute = Math.floor(newTimeInMs / 1000 / 60)
      const newSecond = Math.floor((newTimeInMs / 1000) % 60)
      setMinutes(newMinute)
      setSeconds(newSecond)
    }
  }

  const clearTimer = timerID => {
    clearInterval(timerID)
    setMinutes(0)
    setSeconds(0)
    setTimeInMs(0)
    setIsTimerOn(false)
  }

  return [
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    timeInMs,
    isTimerOn,
    startTimer,
  ]
}
export default useTimer
