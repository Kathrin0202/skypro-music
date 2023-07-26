import { AudioPlayer } from "./components/AudioPlayer/audioPlayer";
import { Nav } from "./components/NavMenu/navMenu";
import { SideBar } from "./components/SideBar/sideBar";
import { TrackList } from "./components/TrackList/trackList";
import * as S from "./App.style";

function App() {
  return (
    <body>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Nav />
            <TrackList />
            <SideBar />
            <AudioPlayer />
          </S.Main>
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </body>
  );
}
export default App;
