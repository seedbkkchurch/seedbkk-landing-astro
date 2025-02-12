import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 17,
    minutes: 43,
    seconds: 11,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const daysElement = document.querySelector('.countdown-element.days')
    if (daysElement) {
      ;(daysElement as HTMLElement).innerText = timeLeft.days.toString().padStart(2, '0')
    }
    const hoursElement = document.querySelector('.countdown-element.hours')
    if (hoursElement) {
      ;(hoursElement as HTMLElement).innerText = timeLeft.hours.toString().padStart(2, '0')
    }
    const minutesElement = document.querySelector('.countdown-element.minutes')
    if (minutesElement) {
      ;(minutesElement as HTMLElement).innerText = timeLeft.minutes.toString().padStart(2, '0')
    }
    const secondsElement = document.querySelector('.countdown-element.seconds')
    if (secondsElement) {
      ;(secondsElement as HTMLElement).innerText = timeLeft.seconds.toString().padStart(2, '0')
    }
  }, [timeLeft])

  return (
    <div className="count-down-main flex w-full items-start justify-center gap-4">
      <div className="timer w-16">
        <div className="overflow-hidden rounded-lg bg-slate-950 px-2 py-4">
          <h3 className="countdown-element days font-Cormorant text-center text-2xl font-semibold text-white"></h3>
        </div>
        <p className="font-Cormorant mt-1 w-full text-center text-lg font-medium text-gray-900">days</p>
      </div>
      <h3 className="font-manrope text-2xl font-semibold text-gray-900">:</h3>
      <div className="timer w-16">
        <div className="overflow-hidden rounded-lg bg-slate-950 px-2 py-4">
          <h3 className="countdown-element hours font-Cormorant text-center text-2xl font-semibold text-white"></h3>
        </div>
        <p className="font-Cormorant mt-1 w-full text-center text-lg font-normal text-gray-900">hours</p>
      </div>
      <h3 className="font-manrope text-2xl font-semibold text-gray-900">:</h3>
      <div className="timer w-16">
        <div className="overflow-hidden rounded-lg bg-slate-950 px-2 py-4">
          <h3 className="countdown-element minutes font-Cormorant text-center text-2xl font-semibold text-white"></h3>
        </div>
        <p className="font-Cormorant mt-1 w-full text-center text-lg font-normal text-gray-900">minutes</p>
      </div>
      <h3 className="font-manrope text-2xl font-semibold text-gray-900">:</h3>
      <div className="timer w-16">
        <div className="overflow-hidden rounded-lg bg-slate-950 px-2 py-4">
          <h3 className="countdown-element seconds font-Cormorant animate-countinsecond text-center text-2xl font-semibold text-white"></h3>
        </div>
        <p className="font-Cormorant mt-1 w-full text-center text-lg font-normal text-gray-900">seconds</p>
      </div>
    </div>
  )
}
