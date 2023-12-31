import { AudioPlayer } from "../AudioPlayer/audioPlayer";
import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
import * as S from "./App.style";

export const MainPage = ({
  isLoading,
  tracks,
  setCurrentTrack,
  trackTime,
  setTrackTime,
}) => {
  return (
    <S.Main>
      <Nav />
      <TrackList
        isLoading={isLoading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
      <SideBar isLoading={isLoading} tracks={tracks} />
      <AudioPlayer
        trackTime={trackTime}
        setTrackTime={setTrackTime}
        setCurrentTrack={setCurrentTrack}
      />
    </S.Main>
  );
};
