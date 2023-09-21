import { Nav } from "../../components/NavMenu/navMenu";
import * as S from "../../components/Main/App.style";
import { MyTrack } from "./myTrack";
import { SideBar } from "../../components/SideBar/sideBar";
export const MyPlaylist = ({
  isLoading,
  setCurrentTrack,
  tracks,
}) => {
  return (
    <S.Main>
      <Nav />
      <MyTrack
        isLoading={isLoading}
        setCurrentTrack={setCurrentTrack}
        tracks={tracks}
      />
      <SideBar isLoading={isLoading} tracks={tracks} />
    </S.Main>
  );
};
