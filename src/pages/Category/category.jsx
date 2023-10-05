import { Nav } from "../../components/NavMenu/navMenu";
import * as S from "../../components/Main/App.style";
import { Item } from "./item";
export const Category = ({ setCurrentTrack }) => {
  return (
    <S.Main>
      <Nav />
      <Item setCurrentTrack={setCurrentTrack} />
    </S.Main>
  );
};
