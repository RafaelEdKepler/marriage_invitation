import styled from "styled-components";
import { NumberContainerType } from "../types";

export const TimeoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 430px) {
    gap: 0.25rem;
  }
`;

export const NumberContainer = styled.div<NumberContainerType>`
  width: ${props => props.colon ? "2.5rem" : "5rem"};
  height: 9rem;
  background-color: ${props => props.colon ? "#fff" : props.theme.colors["invitation-red-theme"]};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: ${props => props.colon ? "2.5rem" : "0.5rem"};

  span {
    font-size: 10rem;
    color: ${props => props.colon ? props.theme.colors["invitation-red-theme"] : props.theme.colors["invitation-golden-theme"]};

    @media (max-width: 430px) {
      font-size: 3rem;
    }

    @media (max-height: 650px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    width: ${props => props.colon ? "0.5rem" : "2rem"};
    height: 5rem;
    padding-bottom: ${props => props.colon ? "0.5rem" : "0"};
    display: ${props => props.seconds ? "none" : "flex"};
  }

  @media (max-width: 430px) {
    width: ${props => props.colon ? "0.5rem" : "2rem"};
    height: 5rem;
    padding-bottom: ${props => props.colon ? "0.5rem" : "0"};
    display: ${props => props.seconds ? "none" : "flex"};
  }
`;