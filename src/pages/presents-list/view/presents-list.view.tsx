import FooterComponent from "../../../components/footer";
import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import PresentCardComponent from "../components/present-card.component";
import { DescriptionContainer, PresentContainer } from "../styles/style";
import { PresentsListViewProps } from "../types";

export default function PresentsListView({ presentsList }: PresentsListViewProps) {

  return (
    <>
      <HeaderComponent />
      <TextAreaComponent>
        <h2>Nesta página você irá encontrar ideias para nos presentear!</h2>
        <DescriptionContainer>
          <p>
            <span>Como já temos a casa mobiliada, nós precisamos de $$$ para começar a trocar móveis/eletrônicos que estão começando a nos deixar na mão. Muitas coisas que temos são de 2ª ou até 3ª mão, e agora está chegando a hora de investirmos em coisas novas.</span>
            <span>Não queremos apenas pedir dinheiro de presente, mas que você conheça nossos sonhos e planos e, se você assim desejar, nos ajudar a alcançá-los. O qrcode em todas as abas é o mesmo, que irá direcionar para a conta bancária do Rafa, mas pedimos que quando fizeres o pix, coloque na descrição para qual presente você gostaria de colaborar. Conforme formos comprando, queremos poder agradecer de forma especial a quem ajudou.</span>
            <span>E desde já agradecemos a cada um por ajudar o início da nossa família, nesta fase tão importante de nossas vidas!</span>
          </p>
        </DescriptionContainer>
        <PresentContainer>
          {presentsList.map((present) => (
            <PresentCardComponent
              key={present.name}
              description={present.description}
              name={present.name}
              photo={present.photo}
            />
          ))}
        </PresentContainer>
      </TextAreaComponent>
      <FooterComponent />
    </>
  )
}