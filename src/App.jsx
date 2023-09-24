import { useState, useEffect, createContext } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";
import { useDispatch } from "react-redux";
import { setNewTracks } from "./store/slices/playlist";
import { AudioPlayer } from "./components/AudioPlayer/audioPlayer";

export const UserContext = createContext("");

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getPlaylist()
      .then((tracks) => {
        console.log(tracks);
        setPosts(tracks);
        dispatch(setNewTracks(tracks));
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <S.Container>
        <UserContext.Provider value={{ user: user, setUser }}>
          <AppRoutes
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            setUser={setUser}
            currentTrack={currentTrack}
          />
          <AudioPlayer />
          <footer></footer>
        </UserContext.Provider>
      </S.Container>
    </S.Wrapper>
  );
}
export default App;
