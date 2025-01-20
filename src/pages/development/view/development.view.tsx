
import FooterComponent from "../../../components/footer";
import HeaderComponent from "../../../components/header";
import { Container } from "../../../components/text-area/style";
import { ContainerWhiteAreaDevelopment } from "./style";


export default function DevelopmentView() {
  return (
    <>
      <HeaderComponent />
      <Container>
        <ContainerWhiteAreaDevelopment />
      </Container>
      <FooterComponent />
    </>
  )
}