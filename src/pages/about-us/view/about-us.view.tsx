import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import TimerComponent from "../../../components/timer/timer.component";
import { AboutUseViewType } from "../types";

export default function AboutUsView({
  days,
  hours,
  minutes,
  seconds
}: AboutUseViewType) {
  return (
    <>
      <HeaderComponent />
      <TextAreaComponent>
        <TimerComponent
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </TextAreaComponent>
    </>
  )
}