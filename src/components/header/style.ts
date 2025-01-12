import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 8%;
  display: flex;
  background-color: ${props => props.theme.colors["invitation-red-theme"]};
  width: 100vw;
  justify-content: center;
  padding: 0.25rem;
`;

export const HearthContainer = styled.div`
  height: 100%;

  img {
    padding-bottom: 5px;
  }
`;