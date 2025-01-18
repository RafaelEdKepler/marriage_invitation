import styled from "styled-components";
import { MenuMobileOptionType, MenuMobileType } from "./type";

export const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  background-color: ${props => props.theme.colors["invitation-red-theme"]};
  background-image: url("coracao.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem;

  @media (max-width: 430px) {
    height: 3rem;
  }
`;

export const MenuOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 1.5rem;
  padding-left: 3.5rem;

  span {
    font-size: 20px;
    color: ${props => props.theme.colors["invitation-golden-theme"]};
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 630px) and (max-height: 650px) {
    display: none !important;
  }
`;

export const SpecialMenuOption = styled(MenuOption) <MenuMobileOptionType>`
  display: ${props => props.isMenuVisible ? "flex" : "none !important"};
  align-items: center;

  img {
    width: 70px;
    height: 50px;
    margin-right: -65px;
  }

  a {
    span {
      opacity: 0.9;
    }
  }
`;

export const MenuMobileIcon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 630px) and (max-height: 650px) {
    display: flex;
  }
`;

export const MenuMobile = styled.div<MenuMobileType>`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  left: 0;
  top: 0;
  width: ${props => props.menuOpened ? "75vw" : "0"};
  background-color: ${props => props.theme.colors["invitation-red-theme"]};
  transition: 0.2s;

  div {
    display: ${props => props.menuOpened ? "flex" : "none"};
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const CloseMobileMenu = styled.div`
  width: 75vw;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem;
`;

export const MenuMobileOption = styled(MenuOption)`
  padding: 2rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  overflow: visible;
`;

export const SpecialMenuMobileOption = styled(MenuMobileOption) <MenuMobileOptionType>`
  background-image: url("/target.png");
  display: ${props => props.isMenuVisible ? "flex" : "none !important"};

  a {
    span {
      opacity: 0.9;
    }
  }
`;