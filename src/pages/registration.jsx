import React from "react";
import * as S from "../components/Main/App.style";
import { LoginPage } from "../components/LoginPage/loginPage";

export const Registration = () => {
  return (
    <S.Wrapper>
      <LoginPage isLoginMode={false} />
    </S.Wrapper>
  );
};
