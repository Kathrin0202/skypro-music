import { playlist } from "./playlist";

export const BarItem = () => {
  return playlist.map((play, index) => {
    return (
      <div key={index} className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img className="sidebar__img" src={play.link} alt={play.text} />
        </a>
      </div>
    );
  });
};
