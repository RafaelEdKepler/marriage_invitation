import styled from "styled-components";
import { BulletType, CarouselContainerType } from "../types";

export const CarouselContainer = styled.div<CarouselContainerType>`
  width: 90%;
  height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin: 0.5rem;

  border-radius: 6px;

  background-color: ${props => props.theme.colors.black};
  background-image: ${props => `url(${props.source})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 25%;
  transition: 0.2s;
  animation: ${props => props.source ? 'imageTransition 2s' : ''};

  @keyframes imageTransition {
    0% {
      background-position-x: 100%;
    }

    100% {
      background-position-x: 50%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 22rem;

    background-position: 50%;
  }
`;

export const BulletContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  opacity: 0.4;
  background-color: ${props => props.theme.colors.black};
  gap: 0.5rem;
  transition: 0.2s;

  @media (max-width: 768px) {
    height: 2rem;
  }
`;

export const Bullet = styled.div<BulletType>`
  width: 2rem;
  height: 2rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 999px;
  opacity: ${props => props.selected ? 1 : 0.7};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 1rem;
    width: 1rem;
  }
`;