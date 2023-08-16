import { AudioPlayer } from "../AudioPlayer/audioPlayer";
import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
import * as S from "./App.style";

export const MainPage = ({
  isLoading,
  tracks,
  setCurrentTrack,
  currentTrack,
  trackTime,
  setTrackTime,
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <TrackList
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
          />
          <SideBar />
          <AudioPlayer
            currentTrack={currentTrack}
            trackTime={trackTime}
            setTrackTime={setTrackTime}
          />
        </S.Main>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
};
