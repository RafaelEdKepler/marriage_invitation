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
  margin: 1rem 0;

 /*
 @media (max-width: 768px) {
    display: none;
  }
*/
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