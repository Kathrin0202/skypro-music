import Skeleton from "react-loading-skeleton";
import { playlist } from "../playlist";
import * as S from "./sceleton.style";

export const SceletonCard = () => {
  return (
    <S.PlaylistItem>
      {Array(10)
        .fill()
        .map((item, index) => (
          <S.PlaylistTrack key={index}>
            <S.TrackTitle>
              <S.TrackTitleImage
                style={{
                  width: "51px",
                  height: "51px",
                  backgroundColor: "rgba(49, 49, 49, 1)",
                }}
              ></S.TrackTitleImage>
              <Skeleton />
              <S.TrackAuthor
                style={{
                  width: "356px",
                  height: "19px",
                  backgroundColor: "rgba(49, 49, 49, 1)",
                }}
              >
                <Skeleton />
              </S.TrackAuthor>
            </S.TrackTitle>
            <S.TrackAuthor
              style={{
                width: "301px",
                height: "19px",
                backgroundColor: "rgba(49, 49, 49, 1)",
              }}
            >
              <Skeleton />
            </S.TrackAuthor>
            <S.TrackAlbum
              style={{
                width: "325px",
                height: "19px",
                backgroundColor: "rgba(49, 49, 49, 1)",
              }}
            >
              <Skeleton />
            </S.TrackAlbum>
          </S.PlaylistTrack>
        ))}
    </S.PlaylistItem>
  );
};

export const SkeletonItem = () => {
  return playlist.map((play, index) => {
    return (
      <S.SideBarItem
        key={index}
        style={{
          width: "250px",
          height: "150px",
          backgroundColor: "rgba(49, 49, 49, 1)",
        }}
      >
        <Skeleton />
      </S.SideBarItem>
    );
  });
};
