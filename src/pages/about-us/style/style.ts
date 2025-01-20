import styled from "styled-components";

export const TextAndCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const NamesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    min-height: 2.5rem;
  }
`;