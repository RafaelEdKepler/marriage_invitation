import { CenteredContent, Container, ContainerWhiteArea } from "./style";
import { TextAreaType } from "./types";

export default function TextAreaComponent({ children }: TextAreaType) {
  return (
    <Container>
      <ContainerWhiteArea>
        <CenteredContent>
          {children}
        </CenteredContent>
      </ContainerWhiteArea>
    </Container>
  )
}