import { useState, useEffect } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackTime, setTrackTime] = useState({});
  useEffect(() => {
    getPlaylist()
      .then((tracks) => {
        console.log(tracks);
        setPosts(tracks);
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <body>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes
            user={user}
            setUser={setUser}
            isLoading={isLoading}
            tracks={tracks}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            trackTime={trackTime}
            setTrackTime={setTrackTime}
          />
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </body>
  );
}
export default App;
