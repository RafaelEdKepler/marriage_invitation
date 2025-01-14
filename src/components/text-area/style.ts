import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 35rem;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  @media (max-width: 430px) {
    min-height: 30rem;
    margin-top: 1.5rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 1rem;
    width: 25%;
    height: 25%;

    @media (max-width: 430px) {
      width: 70%;
      height: 70%;
    }
  }

  span {
    font-size: 1rem;
  }

  h2 {
    color: ${props => props.theme.colors["invitation-red-theme"]};
    font-size: 1.25rem;
    text-align: center;
    font-style: italic;
  }

  h1 {
    color: ${props => props.theme.colors["invitation-red-theme"]};
    margin-top: 2.5rem;

    @media (max-width: 430px) {
      margin-top: 0.5rem;
    }
  }
`;