import React, { useState } from 'react'

//takes minutes and seconds (numeric) for countdown
//and return the updated values of time until we stop timer
const useCountDown = (initialMinutes, initialSeconds) => {
  const [minutes, setMinutes] = useState(Number.parseInt(initialMinutes))
  const [seconds, setSeconds] = useState(Number.parseInt(initialSeconds))
  const timerID = setInterval(() => {
    const isTimerExpired = minutes === 0 && seconds === 0
    if (!isTimerExpired) {
      if (seconds >= 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else {
        setSeconds(seconds - 1)
      }
    } else {
      setMinutes(0)
      setSeconds(0)
    }
  }, 1000)

  return [minutes, seconds, timerID]
}

export default useCountDown
