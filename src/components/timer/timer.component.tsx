import { useCallback, useEffect, useState } from "react";
import { LetterContainer, NumberContainer, TimeoutContainer } from "./styles";
import { calculateDifferenceInTime } from "../../utils/calculate-time-countdown";
import { TimerType } from "../types";


export default function TimerComponent({ date, type }: TimerType) {

  const [timerMonths, setTimerMonths] = useState("00");
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");

  const handleCalculateCountdown = useCallback(() => {
    const { months, days, hours } = type === "up" ? calculateDifferenceInTime(date, new Date()) : calculateDifferenceInTime(new Date(), date);

    setTimerMonths(months);
    setTimerDays(days);
    setTimerHours(hours);
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
        <span>{timerMonths[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerMonths[1]}</span>
      </NumberContainer>
      <LetterContainer colon="true">
        <span>M</span>
      </LetterContainer>
      <NumberContainer>
        <span>{timerDays[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerDays[1]}</span>
      </NumberContainer>
      <LetterContainer colon="true">
        <span>D</span>
      </LetterContainer>
      <NumberContainer>
        <span>{timerHours[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{timerHours[1]}</span>
      </NumberContainer>
      <LetterContainer colon="true">
        <span>H</span>
      </LetterContainer>
    </TimeoutContainer>
  )
}