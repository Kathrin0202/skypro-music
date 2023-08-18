import { Link } from "react-router-dom";
import * as S from "./registr.style";
export function Registration() {
  return (
    <S.ConteinerSignup>
      <S.ModalBlock>
        <S.ModalFormLogin>
          <a href="../">
            <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </a>
          <S.ModalInputSignup type="text" name="login" placeholder="Почта" />
          <S.ModalInputSignup
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <S.ModalInputSignup
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <S.ModalBtnSignupEnt>
            <Link to="/">Войти</Link>
          </S.ModalBtnSignupEnt>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ConteinerSignup>
  );
}
