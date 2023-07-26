import { useState } from "react";
import * as S from "./navMenu.styled";
const Menu = () => {
  return (
    <S.NavMenu>
      <S.ListMenu>
        <S.MenuItem>
          <S.MenuLink href="http://">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="http://">Войти</S.MenuLink>
        </S.MenuItem>
      </S.ListMenu>
    </S.NavMenu>
  );
};
export function Nav() {
  const [open, close] = useState(false);
  const toggleMenu = () => close(!open);
  const enter = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger
        role="button"
        tabIndex={0}
        onKeyDown={enter}
        onClick={toggleMenu}
      >
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {open && Menu()}
    </S.MainNav>
  );
}
