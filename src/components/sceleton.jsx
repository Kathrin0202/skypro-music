import Skeleton from "react-loading-skeleton";
import { playlist } from "./playlist";
export const SceletonCard = () => {
  return (
    <div className="playlist__item">
      {Array(10)
        .fill()
        .map((item, index) => (
          <div key={index} className="playlist__track track">
            <div className="track__title">
              <div
                className="track__title-image"
                style={{
                  width: "51px",
                  height: "51px",
                  backgroundColor: "rgba(49, 49, 49, 1)",
                }}
              ></div>
              <Skeleton />
              <div
                className="track__title-text"
                style={{
                  width: "356px",
                  height: "19px",
                  backgroundColor: "rgba(49, 49, 49, 1)",
                }}
              >
                <Skeleton />
              </div>
            </div>
            <div
              className="track__author"
              style={{
                width: "301px",
                height: "19px",
                backgroundColor: "rgba(49, 49, 49, 1)",
              }}
            >
              <Skeleton />
            </div>
            <div
              className="track__album"
              style={{
                width: "325px",
                height: "19px",
                backgroundColor: "rgba(49, 49, 49, 1)",
              }}
            >
              <Skeleton />
            </div>
          </div>
        ))}
    </div>
  );
};

export const SkeletonItem = () => {
  return playlist.map((play, index) => {
    return (
      <div
        key={index}
        className="sidebar__item"
        style={{
          width: "250px",
          height: "150px",
          backgroundColor: "rgba(49, 49, 49, 1)",
        }}
      >
        <Skeleton />
      </div>
    );
  });
};
