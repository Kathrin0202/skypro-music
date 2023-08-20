import { useState, useEffect, useContext } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";
import { createContext } from "react";

export const UserContext = createContext("");
export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackTime, setTrackTime] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
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
          <UserContext.Provider value={{ user: user, setUser }}>
            <AppRoutes
              isLoading={isLoading}
              tracks={tracks}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              trackTime={trackTime}
              setTrackTime={setTrackTime}
              setUser={setUser}
            />
            <footer></footer>
          </UserContext.Provider>
        </S.Container>
      </S.Wrapper>
    </body>
  );
}
export default App;
