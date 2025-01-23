import CarouselComponent from "../../../components/carousel/carousel.component";
import FooterComponent from "../../../components/footer";
import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import TimerComponent from "../../../components/timer/timer.component";
import { CarouselContainer, NamesContainer, TextAndCarouselContainer, TextContainer } from "../style/style";
import { AboutUseViewType } from "../types";

export default function AboutUsView({
  carouselImages,
  onChangeSelectedImage,
  selectedImage,
  isPhoneSize,
  ourFirstDay
}: AboutUseViewType) {
  return (
    <>
      <HeaderComponent />
      <FooterComponent />
      <TextAreaComponent>
        {isPhoneSize && (
          <CarouselComponent
            images={carouselImages}
            onChangeSelectedImage={onChangeSelectedImage}
            selectedImage={selectedImage}
          />
        )}
        <TextAndCarouselContainer>
          <TextContainer>
            <NamesContainer>
              <img src="/nomes.png" />
            </NamesContainer>
            <p>Tudo começou com um inocente pedido: Vamos montar lego?</p>
            <p>Ela era missionária da igreja. Ele, um líder do grupo de jovens. Ambos gostavam de Harry Potter e de jogos.</p>
            <p>Então ele pensou: O que poderia unir tudo isso? A resposta foi: lego de Harry Potter.</p>
            <p>Não era necessariamente um jogo, mas era próximo o bastante, ele pensou. Ela aceitou, já desconfiada das intenções dele.</p>
            <p>Após um único "encontro", ele já sabia, estava apaixonado. Mas ele ainda tinha coisas a considerar. Tinha medo da rejeição. "E se fosse cedo demais?" ele pensava.
              Isso ocorreu durante as férias dela. Foram duas semanas onde ele pensou, pensou e pensou mais um pouco. Ela também foi para as férias e pensou, conversou com amigas, pediu conselhos.
            </p>
            <p>
              Então, ele decidiu. Compraria mais um lego. Faria mais um encontro. Diria tudo aquilo que sente.
            </p>
            <p>
              Mas ele não disse. Ela retornou das férias, o lego foi, mais um vez montado. Horas de conversa, montagem de lego, indicação de séries e filmes. O momento era o melhor possível. Mas ele se amedrontou.
            </p>
            <p>Chegando em casa às três horas da manhã, arrependido pela própria covardia, mandou uma mensagem. Falando aquilo que sentia. Disse que gostava dela, que se sentia bem junto de sua presença e que esperava que ela sentisse o mesmo.</p>
            <p>A resposta veio no outro dia de manhã. O tão esperado retorno. Ela também gostava dele.</p>
            <p>Então, sem conseguir conter a própria felicidade e impulsividade, ele pediu ela em namoro, pelo próprio aplicativo de mensagens.</p>
            <p>Ela, então, disse que deveriam conversar face-a-face sobre esse assunto. Mais um "encontro" marcado, para às dezoito horas do dia quatro de Janeiro do ano de 2024.</p>
            <p>Após um dia com ele sofrendo de ansiedade, chegou o tão esperado momento. O tão esperado sim, após um pedido decente. Assim, a nossa história começou.</p>
          </TextContainer>
          {!isPhoneSize && (
            <CarouselContainer>
              <CarouselComponent
                images={carouselImages}
                onChangeSelectedImage={onChangeSelectedImage}
                selectedImage={selectedImage}
              />
            </CarouselContainer>
          )}
        </TextAndCarouselContainer>
        <h2>E ela já dura há:</h2>
        <TimerComponent
          date={ourFirstDay}
          type="up"
        />
        <h2>E durará para todo o sempre!</h2>
      </TextAreaComponent>
    </>
  )
}
