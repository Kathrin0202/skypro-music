import { songs } from "./songs";
export const Track = () => {
  return songs.map((song, index) => {
    return (
      <div key={index} className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {song.name}{" "}
                <span className="track__title-span">{song.add}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {song.author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {song.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{song.time}</span>
          </div>
        </div>
      </div>
    );
  });
};
