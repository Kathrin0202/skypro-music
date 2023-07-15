import "./App.css";
import { AudioPlayer } from "./components/audioPlayer";
import { Nav } from "./components/navMenu";
import { SideBar } from "./components/sideBar";
import { TrackList } from "./components/trackList";

function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <TrackList />
            <SideBar />
          </main>
          <AudioPlayer />
          <footer className="footer"></footer>
        </div>
      </div>
    </body>
  );
}
export default App;
