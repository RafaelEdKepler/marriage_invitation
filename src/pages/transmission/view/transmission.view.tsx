import FooterComponent from "../../../components/footer/index.component";
import HeaderComponent from "../../../components/header/index.component";
import TextAreaComponent from "../../../components/text-area/index.component";


export default function TransmissionView() {
  return (
    <>
      <HeaderComponent />
      <FooterComponent />
      <TextAreaComponent>
        <p>Cada vez mais o dia se aproxima e junto com nossa ansiedade e nervosismo, nossa felicidade aumenta em poder falar que iremos transmitir o nosso grande momento para todos que puderes (e quiserem) assistir!</p>
        <p>A cerimônia será transmitida a partir do Google Meet, e já queremos passar alguns pontos sobre ela! Ela está prevista para começar às 17h em ponto. Mas, como todos sabemos, imprevistos acontecem, então ela pode acabar atrasando. Isso não afeta a transmissão, que deve iniciar alguns minutos antes das 17 horas, para que todos possam também já ir abrindo e se preparando!</p>
        <br/>
        <p>A transmissão terá os microfones todos <b>bloqueados</b> desde o começo dela! Então, se quiser compartilhar algo, comunique via chat!</p>
        <br/>
        <p>Nenhum dos noivos estará com os celulares no momento, então, se houver algum problema, também podem informar pelo chat, que teremos uma pessoa responsável que irá verificar de tempos em tempos se tudo corre como o planejado.</p>
        <br/>
        <p>Então, instruções dadas! Estamos muito felizes com esse momento, e gostaríamos de poder convidar todas pessoas queridas para nós. Mas, como isso não é possível, ficamos muito felizes de achar uma maneira de poder ter a todos próximos de nós nesse momento.</p>
        <p>Segue o link para assistirem: <a href="https://meet.google.com/gco-bqrr-pyk">https://meet.google.com/gco-bqrr-pyk</a></p>
      </TextAreaComponent>
    </>
  )
}
