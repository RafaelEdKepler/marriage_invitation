import styled from "styled-components";

export const PopupContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 98vw;
  z-index: 9999;

  div {
    opacity: 0.8;
    background-color: #C0C0C0;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    animation: opacity 2.5s;

    span {
      font-size: 1rem;
    }
  }

  @keyframes opacity {
    0% {
        opacity: 0.9;
    }
    100% {
        opacity: 0;
    }
  }
`;