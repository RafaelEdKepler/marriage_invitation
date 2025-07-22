import FooterComponent from "../../../components/footer/index.component";
import HeaderComponent from "../../../components/header/index.component";
import PopupComponent from "../../../components/popup/index.component";
import TextAreaComponent from "../../../components/text-area/index.component";
import PresentCardComponent from "../components/present-card.component";
import { DescriptionContainer, PresentContainer, QrCodeContainer } from "../styles/style";
import { PresentsListViewProps } from "../types";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function PresentsListView({ presentsList, onClickQrCode, showPopup, onGiftPress }: PresentsListViewProps) {

  return (
    <>
      <HeaderComponent />
      <TextAreaComponent>
        <h2>Nesta página você irá encontrar ideias para nos presentear!</h2>
        <DescriptionContainer>
          <p>
            <span>Como já temos a casa mobiliada, nós precisamos de $$$ para começar a trocar móveis/eletrônicos que estão começando a nos deixar na mão. Muitos dos móveis e eletrodomésticos que temos foram doadas, e agora está chegando a hora de investirmos em coisas novas.</span>
          </p>
          <p>
            <span>Não queremos apenas pedir dinheiro de presente, mas que você conheça os nossos sonhos e planos e, se você assim desejar, nos ajudar a alcançá-los.</span>
          </p>
        </DescriptionContainer>
        {presentsList && (
          <PresentContainer>
            {presentsList.map((present) => (
              <PresentCardComponent
                onPressPresent={onGiftPress}
                present={present}
                key={present.name}
              />
            ))}
          </PresentContainer>
        )}
        <DescriptionContainer>
          <p>
            <span>*Ainda não temos ideia de modelos, as fotos são apenas ilustrativas.</span>
          </p>
          <p>
            <span>O qrcode para todos os presentes encontra-se abaixo, e irá direcioná-lo(a) para a conta bancária do Rafa, mas pedimos que quando fizeres o pix, coloque na descrição para qual presente você gostaria de colaborar. Conforme formos comprando, queremos poder agradecer de forma especial a quem ajudou.</span>
          </p>
          <p>
            <span>E desde já agradecemos a cada um por ajudar o início da nossa família, nesta fase tão importante de nossas vidas!</span>
          </p>
        </DescriptionContainer>
        <CopyToClipboard
          text="00020126470014BR.GOV.BCB.PIX0125rafael.kepler@hotmail.com5204000053039865802BR5921Rafael Eduardo Kepler6009SAO PAULO621405108w4xA3JcRJ63045F09"
        >
          <QrCodeContainer>
            <div>
              <img src="/qrcode-pix.png" onClick={onClickQrCode} />
            </div>
          </QrCodeContainer>
        </CopyToClipboard>
        {showPopup && (
          <PopupComponent />
        )}
      </TextAreaComponent>
      <FooterComponent />
    </>
  )
}