import { HalfSizedImg, InvitationOpened, Section } from "../styles/style";
import { HomeType } from "../types";

export default function HomeView({ invitationShowed, invitationStatus, onInvitationClick }: HomeType) {
  return (
    <Section onClick={onInvitationClick}>
      <HalfSizedImg vanished={invitationStatus} src="esquerda.png" direction="left" />
      <HalfSizedImg vanished={invitationStatus} src="direita.png" direction="right" />
      <InvitationOpened opened={invitationShowed}>

      </InvitationOpened>
    </Section>
  )
}