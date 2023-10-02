import React, { useEffect, useRef, useState } from 'react'

function TraditionalCountdown({event_date, class_Id}) {
    let { month, day, year, hour, minutes, seconds } = event_date

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();
    'May 30, 2024 00:00:00'
    const startTimer = () => {
        const countdownDate = new Date(`${month} ${day}, ${year} ${hour}:${minutes}:${seconds}`).getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24)) 
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))) 
            const minutes = Math.floor((distance % (1000 * 60 * 60 ) / (1000 * 60))) 
            const seconds = Math.floor(distance % (1000 * 60 ) / 1000) 

            if(distance < 0 ){
                // Stop our timer
                clearInterval(interval.current)
            } else {
                // Update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    }

    // componentDidMount

    useEffect(() => {
      startTimer()
      return () => {
        clearInterval(interval.current)
      }
    }, )
    

  return (<>
    
    <div className={`traditional-countdown traditional-countdown-${class_Id}`}>

      <div className={`box-traditional-countdown box-traditional-countdown-days box-traditional-countdown-${class_Id}`}>
          <p>{timerDays}</p>
          <p>Dias</p>
      </div>

      <div className={`box-traditional-countdown box-traditional-countdown-hours box-traditional-countdown-${class_Id}`}>
          <p>{timerHours}</p>
          <p>Horas</p>
      </div>
    <p>:</p>
      <div className={`box-traditional-countdown box-traditional-countdown-minutes box-traditional-countdown-${class_Id}`}>
          <p>{timerMinutes}</p>
          <p>Minutos</p>
      </div>
    <p>:</p>
      <div className={`box-traditional-countdown box-traditional-countdown-seconds box-traditional-countdown-${class_Id}`}>
          <p>{timerSeconds}</p>
          <p>Segundos</p>
      </div>
        
    </div></>
  )
}

export default TraditionalCountdown