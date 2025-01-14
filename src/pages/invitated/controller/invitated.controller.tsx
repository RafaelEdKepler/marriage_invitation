import { differenceInSeconds } from "date-fns";
import InvitatedView from "../view/invitated.view";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function InvitatedController() {

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const marriageDate = useMemo(() => new Date('2025-11-21 17:00:00'), []);

  const handleCalculateCountdown = useCallback(() => {
    const actualDate = new Date();
    const totalSeconds = differenceInSeconds(marriageDate, actualDate);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    setDays(String(Math.floor(totalHours / 24)));
    setSeconds(String(Math.floor(totalSeconds % 60)));
    setMinutes(String(Math.floor(totalMinutes % 60)));
    setHours(String(Math.floor(totalHours % 24)));
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
      hours={hours.length < 2 ? `0${hours}` : hours}
      minutes={minutes.length < 2 ? `0${minutes}` : minutes}
      seconds={seconds.length < 2 ? `0${seconds}` : seconds}
    />
  )
}