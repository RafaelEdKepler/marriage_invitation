
import FooterComponent from "../../../components/footer/index.component";
import HeaderComponent from "../../../components/header/index.component";
import { Container } from "../../../components/text-area/style";
import { ContainerWhiteAreaDevelopment } from "./style";


export default function DevelopmentView() {
  return (
    <>
      <HeaderComponent />
      <Container>
        <ContainerWhiteAreaDevelopment>
          <img src="/in-development.png" />
        </ContainerWhiteAreaDevelopment>
      </Container>
      <FooterComponent />
    </>
  )
}