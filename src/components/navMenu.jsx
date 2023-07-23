import { useState } from "react";

const Menu = () => {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Главное
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Мой плейлист
          </a>
        </li>
        <li className="menu__item">
          <a href="http://" className="menu__link">
            Войти
          </a>
        </li>
      </ul>
    </div>
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
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={enter}
        onClick={toggleMenu}
        className="nav__burger burger"
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {open && Menu()}
    </nav>
  );
}
