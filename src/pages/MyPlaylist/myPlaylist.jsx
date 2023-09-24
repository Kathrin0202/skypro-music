import { Nav } from "../../components/NavMenu/navMenu";
import * as S from "../../components/Main/App.style";
import { MyTrack } from "./myTrack";
import { SideBar } from "../../components/SideBar/sideBar";
export const MyPlaylist = ({ setCurrentTrack }) => {
  return (
    <S.Main>
      <Nav />
      <MyTrack setCurrentTrack={setCurrentTrack} />
      <SideBar />
    </S.Main>
  );
};
