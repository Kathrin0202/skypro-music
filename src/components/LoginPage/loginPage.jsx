import { Link, useNavigate } from "react-router-dom";
import * as S from "./login.style";
import { useContext, useEffect, useState } from "react";
import { registerUser, loginUser, getToken, refreshToken } from "../api";
import { UserContext } from "../../App";

export function LoginPage({ isLoginMode = false }) {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    if (!email) {
      setError("Не заполнена почта");
      return;
    } else if (!password) {
      setError("Не введён пароль");
      return;
    }
    setLogin(true);
    loginUser({ email, password }).then((data) => {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    });
    try {
      const token = getToken({ email, password });
      const tokenRefresh = token.refresh;
      const access = refreshToken(tokenRefresh);
    } catch (erro) {
      setError(erro.message);
    } finally {
      setLogin(false);
    }
  };

  const handleRegister = async ({ email, password }) => {
    if (!email) {
      setError("Не заполнена почта");
      return;
    } else if (!password) {
      setError("Не введён пароль");
      return;
    } else if (!repeatPassword) {
      setError("Не введён пароль повторно");
      return;
    } else if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
    setRegister(true);
    registerUser({ email, password })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/login");
      })
      .catch((erro) => {
        setError(erro.message);
      })
      .finally(() => {
        setRegister(false);
      });
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <a href="../">
            <S.ModalLogo>
              <img src="../img/logoSky.jpg" alt="logo" />
            </S.ModalLogo>
          </a>
          {isLoginMode ? (
            <>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <S.ModalBtnEnter
                onClick={() => handleLogin({ email, password })}
                disabled={login}
              >
                Войти
              </S.ModalBtnEnter>
              <Link to="/registration">
                <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
              </Link>
            </>
          ) : (
            <>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <S.ModalBtnEnter
                onClick={() => handleRegister({ email, password })}
                disabled={register}
              >
                Зарегистрироваться
              </S.ModalBtnEnter>
              <Link to="/login">
                <S.ModalBtnSignup>Войти</S.ModalBtnSignup>
              </Link>
            </>
          )}
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  );
}
