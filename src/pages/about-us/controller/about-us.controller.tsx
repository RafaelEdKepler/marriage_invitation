import { useCallback, useEffect, useState } from "react";
import AboutUsView from "../view/about-us.view";
import { calculateDifferenceInTime } from "../../../utils/calculate-time-countdown";

export default function AboutUsController() {

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const handleCalculateCountdown = useCallback(() => {
    const actualDate = new Date();
    const ourFirstDay = new Date('2024-01-04 18:30:00');
    const { days, hours, minutes, seconds } = calculateDifferenceInTime(ourFirstDay, actualDate);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [])


  useEffect(() => {
    handleCalculateCountdown()
    setInterval(() => {
      handleCalculateCountdown();
    }, 1000)
  }, [handleCalculateCountdown])

  return (
    <AboutUsView
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  )
}