import { TextAreaType } from "../types";
import { CenteredContent, Container, ContainerWhiteArea } from "./style";

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