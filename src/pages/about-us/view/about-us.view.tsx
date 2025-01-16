import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import TimerComponent from "../../../components/timer/timer.component";

export default function AboutUsView() {
  return (
    <>
      <HeaderComponent />
      <TextAreaComponent>
        <TimerComponent
          days="100"
          hours="10"
          minutes="10"
          seconds="10"
        />
      </TextAreaComponent>
    </>
  )
}