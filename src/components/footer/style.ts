import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.colors["invitation-red-theme"]};
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  font-family: 'Sacramento';
  justify-content: center;

  padding: 0.25rem;
  color: ${props => props.theme.colors["invitation-golden-theme"]};
  flex-direction: row;
`;

export const OnlyTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;

  span {
    font-size: 32px;
    padding-left: 0.75rem;

    @media (max-width: 430px) {
      font-size: 20px;
    }
  }

  svg {
    margin-left: 1rem;
    width: 32px;
    height: 32px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const SocialMediaContainer = styled(OnlyTitleContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 0.25rem;
    }

    span {
      padding-left: 0.25rem;
      font-family: "EB Garamond", sans-serif;
      font-size: 20px;
      display: flex;
      align-items: center;
      margin-bottom: 0.2rem;


      @media (max-width: 430px) {
        font-size: 14px;
      }
    }
  }
`;

export const SpotifyContainer = styled(OnlyTitleContainer)`
  flex-direction: row;

  @media (max-width: 430px) {
    svg {
      margin-left: 0.25rem;
      width: 20px;
      height: 20px;
    }
  }
`;