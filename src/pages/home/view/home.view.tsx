import { HalfSizedImg, Section } from "../styles/style";
import { HomeType } from "../types";

export default function HomeView({ invitationStatus, onInvitationClick }: HomeType) {
  return (
    <Section onClick={onInvitationClick}>
      <HalfSizedImg vanished={invitationStatus} src="esquerda.png" direction="left" />
      <HalfSizedImg vanished={invitationStatus} src="direita.png" direction="right" />
    </Section>
  )
}