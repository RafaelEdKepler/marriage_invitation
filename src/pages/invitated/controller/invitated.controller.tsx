import InvitatedView from "../view/invitated.view";
import { useCallback, useEffect, useMemo, useState } from "react";
import { calculateDifferenceInTime } from "../../../utils/calculate-time-countdown";

export default function InvitatedController() {

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const marriageDate = useMemo(() => new Date('2025-11-21 17:00:00'), []);

  const handleCalculateCountdown = useCallback(() => {
    const actualDate = new Date();
    const { days, hours, minutes, seconds } = calculateDifferenceInTime(actualDate, marriageDate);
    setDays(days);
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
  }, [marriageDate])

  useEffect(() => {
    handleCalculateCountdown();
    setInterval(() => {
      handleCalculateCountdown();
    }, 1000)
  }, [marriageDate, handleCalculateCountdown])


  return (
    <InvitatedView
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  )
}