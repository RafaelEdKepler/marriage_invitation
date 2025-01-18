import { InvitatedType } from "../../pages/invitated/types";
import { NumberContainer, TimeoutContainer } from "./styles";


export default function TimerComponent({ days, hours, minutes, seconds }: InvitatedType) {

  days = days.length < 2 ? `0${days}` : days;
  days = days.length < 3 ? `0${days}` : days;
  hours = hours.length < 2 ? `0${hours}` : hours;
  minutes = minutes.length < 2 ? `0${minutes}` : minutes;
  seconds = seconds.length < 2 ? `0${seconds}` : seconds;

  return (
    <TimeoutContainer>
      <NumberContainer>
        <span>{days[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{days[1]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{days[2]}</span>
      </NumberContainer>
      <NumberContainer colon="true">
        <span>:</span>
      </NumberContainer>
      <NumberContainer>
        <span>{hours[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{hours[1]}</span>
      </NumberContainer>
      <NumberContainer colon="true">
        <span>:</span>
      </NumberContainer>
      <NumberContainer>
        <span>{minutes[0]}</span>
      </NumberContainer>
      <NumberContainer>
        <span>{minutes[1]}</span>
      </NumberContainer>
      <NumberContainer colon="true" seconds="true">
        <span>:</span>
      </NumberContainer>
      <NumberContainer seconds="true">
        <span>{seconds[0]}</span>
      </NumberContainer>
      <NumberContainer seconds="true">
        <span>{seconds[1]}</span>
      </NumberContainer>
    </TimeoutContainer>
  )
}