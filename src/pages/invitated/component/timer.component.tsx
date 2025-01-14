import { NumberContainer, TimeoutContainer } from "../styles";
import { InvitatedType } from "../types";

export default function TimerComponent({ days, hours, minutes, seconds }: InvitatedType) {
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