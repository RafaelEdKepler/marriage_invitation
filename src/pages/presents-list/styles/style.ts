import styled from "styled-components";
import TextAreaComponent from "../../../components/text-area";

export const PresentListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  height: 10rem;
  padding: 0.5rem;
`

export const PresentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  img {
    height: 7rem;
    width: 15rem;
    border-radius: 6px;
    margin-right: 1rem;

    @media (max-width: 763px) {
      height: 3rem;
      width: 7rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 1rem;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 1rem;
    color: ${props => props.theme.colors["invitation-red-theme"]};
  }
`

export const PresentsListWhiteAreaContainer = styled(TextAreaComponent)`
  height: 100vh;
`