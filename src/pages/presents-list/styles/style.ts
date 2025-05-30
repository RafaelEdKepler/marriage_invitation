import styled from "styled-components";

export const PresentListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  height: 10rem;
  overflow: hidden;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const PresentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors["invitation-red-theme"]};
    border-radius: 9px;

    img {
      width: 150px;
      height: 150px;
    }
  }

`;