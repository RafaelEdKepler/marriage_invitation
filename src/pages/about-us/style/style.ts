import styled from "styled-components";

export const TextAndCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
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
    margin-top: 1rem;
    min-height: 2.5rem;
    width: 30%;
    height: 25%;

    @media (max-width: 430px) {
      width: 60%;
      height: 60%;
    }
  }
`;