import styled from "styled-components";
import { CarouselContainerType } from "../types";

export const CarouselContainer = styled.div<CarouselContainerType>`
  width: 80%;
  height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin-top: 2rem;

  border-radius: 6px;

  background-color: #000;
  background-image: ${props => `url(${props.source})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 25%;
  transition: 0.2s;
  animation: imageTransition 2s;

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
    height: 10rem;

    background-size: contain;

    background-position: 50%;
  }
`;

export const BulletContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  opacity: 0.2;
  background-color: #000;
  gap: 0.5rem;
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    height: 2rem;
  }
`;

export const Bullet = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  opacity: 0.9;
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