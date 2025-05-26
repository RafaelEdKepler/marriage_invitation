import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 35rem;
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 7rem 0;

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
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;
  overflow-wrap: normal;
  white-space: normal;
  overflow-wrap: break-word;

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

  span {
    font-size: 1rem;
  }

  p {
    text-align: justify;
    margin: 0.2rem 0 0.2rem 0;

    @media (max-width: 768px) {
      margin: 0.5rem 0 0.5rem 0;
    }
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