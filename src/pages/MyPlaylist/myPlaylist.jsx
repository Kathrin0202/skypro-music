import { AudioPlayer } from "../../components/AudioPlayer/audioPlayer";
import { Nav } from "../../components/NavMenu/navMenu";
import * as S from "../../components/Main/App.style";
import { MyTrack } from "./myTrack";
import { SideBar } from "../../components/SideBar/sideBar";
export const MyPlaylist = ({
  trackTime,
  setTrackTime,
  isLoading,
  setCurrentTrack,
  tracks,
}) => {
  return (
    <S.Main>
      <Nav />
      <MyTrack isLoading={isLoading} setCurrentTrack={setCurrentTrack} />
      <SideBar isLoading={isLoading} tracks={tracks} />
      <AudioPlayer trackTime={trackTime} setTrackTime={setTrackTime} />
    </S.Main>
  );
};
