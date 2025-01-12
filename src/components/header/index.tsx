import { useState } from "react";
import { CloseMobileMenu, HeaderContainer, MenuMobile, MenuMobileIcon, MenuMobileOption, MenuOption } from "./style";
import { List, X } from "@phosphor-icons/react"

export default function HeaderComponent() {

  const [menuMobileOpened, setMenuMobileOpened] = useState(false);

  return (
    <HeaderContainer>
      <MenuMobile menuOpened={menuMobileOpened} >
        <div>
          <CloseMobileMenu onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
            <X size={32} weight="bold" color="#eee6d5" />
          </CloseMobileMenu>
          <MenuMobileOption>
            <a href="#">
              <span>Sobre nós</span>
            </a>
          </MenuMobileOption>
          <MenuMobileOption>
            <a href="#">
              <span>Transmissão</span>
            </a>
          </MenuMobileOption>
          <MenuMobileOption>
            <a href="#">
              <span>Lista de Presentes</span>
            </a>
          </MenuMobileOption>
        </div>
      </MenuMobile>
      <MenuMobileIcon onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
        <List weight="bold" size={32} color="#eee6d5" />
      </MenuMobileIcon>
      <MenuOption>
        <a href="#">
          <span>Sobre nós</span>
        </a>
      </MenuOption>
      <MenuOption>
        <a href="#">
          <span>Transmissão</span>
        </a>
      </MenuOption>
      <MenuOption>
        <a href="#">
          <span>Lista de Presentes</span>
        </a>
      </MenuOption>
    </HeaderContainer>
  )
}