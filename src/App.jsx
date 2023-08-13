import { useState, useEffect } from "react";
import * as S from "./components/Main/App.style";
import { Login } from "./pages/login";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ login: "token" });
  const handleLogOut = () => setUser(null);
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
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
          <Login
            user={user}
            onAuthButtonClick={user ? handleLogOut : handleLogin}
          />
          <AppRoutes
            user={user}
            isLoading={isLoading}
            tracks={tracks}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </body>
  );
}
export default App;
