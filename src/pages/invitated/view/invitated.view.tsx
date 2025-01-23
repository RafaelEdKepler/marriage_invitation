import FooterComponent from "../../../components/footer";
import HeaderComponent from "../../../components/header/";
import TextAreaComponent from "../../../components/text-area";
import TimerComponent from "../../../components/timer/timer.component";
import { InvitatedType } from "../types";

export default function InvitatedView({ marriageDate }: InvitatedType) {
  return (
    <>
      <HeaderComponent />
      <TextAreaComponent>
        <h2>Sabemos quanto Deus nos ama e confiamos em seu amor. Deus é amor, e quem permanece no amor permanece em Deus, e Deus nele.</h2>
        <h1>1 Jo 4:16</h1>
        <img alt="Imagem de um coração com a data 21/05/2025 dentro, contorno avermelhado e na base duas alianças se encontrando." src="/save-the-date.png" />
        <h1>SAVE THE DATE</h1>
        <TimerComponent
          date={marriageDate}
          type="down"
        />
      </TextAreaComponent>
      <FooterComponent />
    </>
  )
}