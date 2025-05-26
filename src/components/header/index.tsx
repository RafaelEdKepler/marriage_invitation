import { useState } from "react";
import { CloseMobileMenu, HeaderContainer, MenuMobile, MenuMobileIcon, MenuMobileOption, MenuOption, SpecialMenuMobileOption, SpecialMenuOption } from "./style";
import { List, X } from "@phosphor-icons/react"
import { UsersAGroomsMenOrBridesMaid } from "../types";

export default function HeaderComponent() {

  const [menuMobileOpened, setMenuMobileOpened] = useState(false);

  const isUserAGroom: UsersAGroomsMenOrBridesMaid | false | "" = localStorage.getItem("@thaysa&rafael:groomsmen-mission") ? localStorage.getItem("@thaysa&rafael:groomsmen-mission") as UsersAGroomsMenOrBridesMaid : "";

  const menuOptions = [
    {
      title: "Início",
      link: "/invitated"
    },
    {
      title: "Sobre nós",
      link: "/about-us",
    },
    {
      title: "Transmissão",
      link: "/in-development",
    },
    {
      title: "Lista de Presentes",
      link: "/gifts-list",
    },
    {
      title: "Missão: Padrinho",
      link: `/special-invite/${isUserAGroom}`,
      hiddenMenu: true
    }
  ]

  return (
    <HeaderContainer>
      <MenuMobile menuOpened={menuMobileOpened} >
        <div>
          <CloseMobileMenu onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
            <X size={32} weight="bold" color="#eee6d5" />
          </CloseMobileMenu>
          {menuOptions.map(item => (
            <div key={item.title}>
              {item.hiddenMenu ? (
                <SpecialMenuMobileOption isMenuVisible={!!(isUserAGroom)}>
                  <a href={item.link}>
                    <span>{item.title}</span>
                  </a>
                </SpecialMenuMobileOption>
              ) : (
                <MenuMobileOption key={item.title}>
                  <a href={item.link}>
                    <span>{item.title}</span>
                  </a>
                </MenuMobileOption>
              )}
            </div>
          ))}
        </div>
      </MenuMobile>
      <MenuMobileIcon onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
        <List weight="bold" size={32} color="#eee6d5" />
      </MenuMobileIcon>
      {menuOptions.map(item => (
        <div key={item.title}>
          {item.hiddenMenu ? (
            <SpecialMenuOption isMenuVisible={!!(isUserAGroom)}>
              <img src="/target.png" />
              <a href={item.link}>
                <span>{item.title}</span>
              </a>
            </SpecialMenuOption>
          ) : (
            <MenuOption>
              <a href={item.link}>
                <span>{item.title}</span>
              </a>
            </MenuOption>
          )}
        </div>
      ))}
    </HeaderContainer>
  )
}