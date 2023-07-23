import { Track } from "./Track";
import { useEffect, useState } from "react";
import { SceletonCard } from "./sceleton";
import { Filter } from "./filter";
export function TrackList() {
  const [isLoading, setLoading] = useState([]);
  const [songs, setPosts] = useState(false);
  useEffect(() => {
    setLoading(true);
    const time = setTimeout(() => {
      setPosts(songs);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(time);
  }, []);
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {isLoading ? <SceletonCard /> : <Track />}
        </div>
      </div>
    </div>
  );
}
