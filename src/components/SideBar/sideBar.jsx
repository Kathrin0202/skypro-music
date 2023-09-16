import { BarItem } from "../BarItem/barItem";
import { SkeletonItem } from "../Track/sceleton";
import * as S from "./sideBar.style";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export function SideBar(isLoading) {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();
  const avatarUser = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{user.username}</S.SideBarPersonalName>
        <S.SideBarAvatar onClick={avatarUser}></S.SideBarAvatar>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
          {isLoading && <SkeletonItem />}
          {!isLoading && <BarItem />}
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  );
}
