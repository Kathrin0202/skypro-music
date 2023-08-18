import { Link } from "react-router-dom";
import * as S from "./login.style";

export function Login({ user, setUser }) {
  const handleLogin = () => setUser({ login: "token" });
  const handleLogOut = () => setUser(null);
  return (
    <S.ContainerEnter>
      <S.MobalBlock>
        <S.MobalFormLogin action="#">
          <a href="../">
            <S.MobalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.MobalLogo>
          </a>
          <S.ModalInput type="text" name="login" placeholder="Почта" />
          <S.ModalInput type="password" name="password" placeholder="Пароль" />
          <S.ModalBtnEnter onClick={user ? handleLogOut : handleLogin}>
            <Link to="/main">Войти</Link>
          </S.ModalBtnEnter>
          <S.ModalBtnSignup onClick={user ? handleLogOut : handleLogin}>
            <Link to="/registration">Зарегистрироваться</Link>
          </S.ModalBtnSignup>
        </S.MobalFormLogin>
      </S.MobalBlock>
    </S.ContainerEnter>
  );
}
