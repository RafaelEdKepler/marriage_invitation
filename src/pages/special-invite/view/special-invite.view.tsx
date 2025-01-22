import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import { HalfSizedImg, InvitationOpened, Section } from "../../home/styles/style";
import { InvitationContainer, VideoContainer } from "../styles/style";
import { SpecialInviteType } from "../type";

export default function SpecialInviteView({ invitationShowed, invitationStatus, onInvitationClick, specialInvitatedName }: SpecialInviteType) {

  const { innerWidth } = window;


  if (!invitationShowed) {
    return (
      <Section onClick={onInvitationClick}>
        <HalfSizedImg vanished={invitationStatus} src="/esquerda.png" direction="left" />
        <HalfSizedImg vanished={invitationStatus} src="/direita.png" direction="right" />
        <InvitationOpened opened={invitationShowed} />
      </Section>
    )
  } else {
    return (
      <InvitationContainer>
        <HeaderComponent />
        <TextAreaComponent>
          <h1>Olá, {specialInvitatedName}!</h1>
          <h2>Estamos muito felizes por ter você na nossa história!</h2>
          <p>Para isso, temos uma mensagem, junto com uma missão pra você no vídeo abaixo!</p>
          <VideoContainer>
            {/* @ts-expect-error err */}
            <iframe width={innerWidth > 430 ? "800" : "250"} height={innerWidth > 430 ? "400" : "200"} src="https://www.youtube.com/embed/1sXx_GGeIBQ?si=lvLCYhdqaDsYu15F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </VideoContainer>
        </TextAreaComponent>
      </InvitationContainer>
    )
  }

}