import { BarItem } from "../BarItem/barItem";
import { useEffect, useState } from "react";
import { SkeletonItem } from "../Track/sceleton";
import * as S from "./sideBar.style";

export function SideBar() {
  const [isLoading, setLoading] = useState([]);
  const [songs, setPosts] = useState(false);
  useEffect(() => {
    setLoading(true);
    const time = setTimeout(() => {
      setPosts(songs);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(time);
  }, []);
  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Sergey.Ivanov</S.SideBarPersonalName>
        <S.SideBarAvatar></S.SideBarAvatar>
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
