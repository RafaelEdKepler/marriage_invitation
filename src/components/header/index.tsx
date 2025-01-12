import { useState } from "react";
import { CloseMobileMenu, HeaderContainer, MenuMobile, MenuMobileIcon, MenuMobileOption, MenuOption } from "./style";
import { List, X } from "@phosphor-icons/react"

export default function HeaderComponent() {

  const [menuMobileOpened, setMenuMobileOpened] = useState(false);

  const menuOptions = [
    {
      title: "Sobre nós",
      link: "#"
    },
    {
      title: "Transmissão",
      link: "#"
    },
    {
      title: "Lista de Presentes",
      link: "#"
    },
  ]

  return (
    <HeaderContainer>
      <MenuMobile menuOpened={menuMobileOpened} >
        <div>
          <CloseMobileMenu onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
            <X size={32} weight="bold" color="#eee6d5" />
          </CloseMobileMenu>
          {menuOptions.map(item => (
            <MenuMobileOption key={item.title}>
              <a href={item.link}>
                <span>{item.title}</span>
              </a>
            </MenuMobileOption>
          ))}
        </div>
      </MenuMobile>
      <MenuMobileIcon onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
        <List weight="bold" size={32} color="#eee6d5" />
      </MenuMobileIcon>
      {menuOptions.map(item => (
        <MenuOption key={item.title}>
          <a href={item.link}>
            <span>{item.title}</span>
          </a>
        </MenuOption>
      ))}
    </HeaderContainer>
  )
}