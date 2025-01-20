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

  @media (max-height: 650px) {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

export const ContainerWhiteArea = styled.div`
  width: 75%;
  background-color: #fff;
  padding: 2rem;
  min-height: 60%;
  overflow: hidden;

  @media (max-width: 830px) {
    width: 85%;
  }
`;

export const CenteredContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: normal;

  img {
    margin-top: 1rem;
    width: 25%;
    height: 25%;

    @media (max-width: 430px) {
      width: 60%;
      height: 60%;
    }
  }

  span {
    font-size: 1rem;
  }

  p {
    text-align: left;
    white-space: normal;
  }

  h2 {
    color: ${props => props.theme.colors["invitation-red-theme"]};
    font-size: 1.25rem;
    text-align: center;
    font-style: italic;

    @media (max-height: 650px) {
      font-size: 1rem;
    }

    @media (max-width: 430px) {
      font-size: 1rem;
    }
  }

  h1 {
    color: ${props => props.theme.colors["invitation-red-theme"]};
    margin-top: 2.5rem;

    @media (max-width: 430px) {
      margin-top: 0.5rem;
    }

    @media (max-height: 650px) {
      font-size: 1.25rem;
      margin-top: 0.25rem;
    }
  }
`;