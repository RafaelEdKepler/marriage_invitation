import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 10%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 430px) {
    margin-top: 2rem;
  }
`;

export const ContainerWhiteArea = styled.div`
  width: 75%;
  background-color: #fff;
  padding: 2rem;

  @media (max-width: 430px) {
    width: 85%;
  }
`;

export const CenteredContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;

  img {
    width: 55%;
    height: 55%;

    @media (max-width: 430px) {
      width: 100%;
      height: 100%;
    }
  }
`;