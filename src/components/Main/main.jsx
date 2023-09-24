import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
import * as S from "./App.style";

export const MainPage = ({ isLoading, setCurrentTrack, tracks }) => {
  return (
    <S.Main>
      <Nav />
      <TrackList isLoading={isLoading} setCurrentTrack={setCurrentTrack} />
      <SideBar isLoading={isLoading} setCurrentTrack={setCurrentTrack} />
    </S.Main>
  );
};
