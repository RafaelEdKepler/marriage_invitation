import styled from "styled-components";
import { ImgDesignType } from "../types";

export const Section = styled.section`
  margin: 1rem;
  width: 95vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HalfSizedImg = styled.img<ImgDesignType>`
  transform-origin: ${props => props.direction};
  animation: ${props => props.vanished ? "openInvitation 2.5s forwards" : "invitationTrembling 4.5s"};
  animation-iteration-count: ${props => props.vanished ? "1" : "infinite"};

  @keyframes openInvitation {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(-90deg);
        opacity: 0;
    }
  }

  @keyframes invitationTrembling {
    0% { transform: translate(1px, 1px) rotate(0deg); opacity: 1}
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-2px, 0px) rotate(1deg); }
    30% { transform: translate(2px, 1px) rotate(0deg); opacity: 0.8}
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-2px, 1px) rotate(0deg); opacity: 1}
    70% { transform: translate(2px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); opacity: 0.8}
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  @media (max-width: 430px) {
    width: fit-content;
    height: fit-content;
  }
`;