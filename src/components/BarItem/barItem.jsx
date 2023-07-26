import { playlist } from "../playlist";
import * as S from "./baritem.style";

export const BarItem = () => {
  return playlist.map((play, index) => {
    return (
      <S.SideBarItem key={index}>
        <S.SideBarLink href="#">
          <S.SideBarImage src={play.link} alt={play.text} />
        </S.SideBarLink>
      </S.SideBarItem>
    );
  });
};
