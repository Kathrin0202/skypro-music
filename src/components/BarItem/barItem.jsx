import { Link } from "react-router-dom";
import { playlist } from "../playlist";
import * as S from "./baritem.style";

export const BarItem = () => {
  return playlist.map((play) => {
    return (
      <S.SideBarItem key={play.id}>
        <Link to={`/item/${play.id}`}>
          <S.SideBarLink>
            <S.SideBarImage src={play.link} alt={play.text} />
          </S.SideBarLink>
        </Link>
      </S.SideBarItem>
    );
  });
};
