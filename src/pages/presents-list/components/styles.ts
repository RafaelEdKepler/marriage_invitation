import styled from "styled-components";

interface PresentCardContainerProps {
  open?: boolean;
}

export const PresentCardContainer = styled.div<PresentCardContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 9px;
  outline: 1px solid ${props => props.theme.colors["invitation-red-theme"]};
  max-width: 25rem;
  max-height: ${props => props.open ? '1000rem' : '15rem'};
  border-color: ${props => props.theme.colors["invitation-red-theme"]};
  padding: 1rem;
  gap: 1rem;
  transition: 0.2s;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors["invitation-red-theme"]};
  }

  span {
    display: ${props => props.open ? "block" : "none"};
    font-size: 1rem;
    color: ${props => props.theme.colors["invitation-red-theme"]};
  }

  &:hover {
    outline-width: 2px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 9px;
`;

export const QrCode = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 9px;
`;