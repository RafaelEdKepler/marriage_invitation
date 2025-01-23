import { useCallback, useEffect, useState } from "react";
import { NumberContainer, TimeoutContainer } from "./styles";
import { calculateDifferenceInTime } from "../../utils/calculate-time-countdown";
import { TimerType } from "../types";


export default function TimerComponent({ date, type }: TimerType) {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const handleCalculateCountdown = useCallback(() => {
    const { days, hours, minutes, seconds } = type === "up" ? calculateDifferenceInTime(date, new Date()) : calculateDifferenceInTime(new Date(), date);

    setTimerDays(days.length < 2 ? `0${days}` : days);
    setTimerDays(days.length < 3 ? `0${days}` : days);
    setTimerHours(hours.length < 2 ? `0${hours}` : hours);
    setTimerMinutes(minutes.length < 2 ? `0${minutes}` : minutes);
    setTimerSeconds(seconds.length < 2 ? `0${seconds}` : seconds);
  }, [date, type])

  useEffect(() => {
    handleCalculateCountdown()
    const countDownTimer = setInterval(() => {
      handleCalculateCountdown();
    }, 1000)
    return () => {
      clearInterval(countDownTimer);
    }
  }, [handleCalculateCountdown])

  return (
    <TimeoutContainer>
      <NumberContainer>
        <span>{timerDays[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerDays[1]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerDays[2]}</span>
      </NumberContainer>
      <NumberContainer colon="true">
        <span>:</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerHours[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerHours[1]}</span>
      </NumberContainer>
      <NumberContainer colon="true">
        <span>:</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerMinutes[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerMinutes[1]}</span>
      </NumberContainer>
      <NumberContainer colon="true" seconds="true">
        <span>:</span>
      </NumberContainer>
      <NumberContainer seconds="true">
        <span>{timerSeconds[0]}</span>
      </NumberContainer>
      <NumberContainer seconds="true">
        <span>{timerSeconds[1]}</span>
      </NumberContainer>
    </TimeoutContainer>
  )
}