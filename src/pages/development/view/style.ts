import styled from "styled-components";
import { ContainerWhiteArea } from "../../../components/text-area/style"


export const ContainerWhiteAreaDevelopment = styled(ContainerWhiteArea)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;

    img {
      height: 55%;
      width: 100%;
    }
  }
`;