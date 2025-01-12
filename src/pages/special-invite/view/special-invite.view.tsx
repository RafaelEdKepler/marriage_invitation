import { useParams } from "react-router-dom";
import { Container, HalfSizedImg, Section, VideoContainer } from "../styles/style";
import { SpecialInviteType } from "../type";

export default function SpecialInviteView({ invitationShowed, invitationStatus, onInvitationClick }: SpecialInviteType) {

  const { innerWidth } = window;

  const { groom } = useParams();


  return (
    <Section onClick={onInvitationClick}>
      <HalfSizedImg vanished={invitationStatus} src="/esquerda.png" direction="left" />
      <HalfSizedImg vanished={invitationStatus} src="/direita.png" direction="right" />
      <Container invitationClicked={invitationShowed}>
        <VideoContainer>
          <iframe width={innerWidth > 430 ? "800" : "250"} height={innerWidth > 430 ? "400" : "200"} src="https://www.youtube.com/embed/1sXx_GGeIBQ?si=lvLCYhdqaDsYu15F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </VideoContainer>
      </Container>
    </Section>
  )
}