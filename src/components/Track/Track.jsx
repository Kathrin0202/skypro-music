import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from "../../services/myTracks";
import { setCurrentTracks, setNewTracks } from "../../store/slices/playlist";
import * as S from "./sceleton.style";
function formatTime(number) {
  let time = String(number);
  if (time.length < 2) return `0${time}`;
  return time;
}

export const TrackPage = ({ setCurrentTrack, error, tracks }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.track.trackId);
  const play = useSelector((state) => state.track.playTrack);
  const playTrack = (
    musicAuthor,
    musicTitle,
    track_file,
    time,
    id,
    stared_user
  ) => {
    setCurrentTrack({
      author: musicAuthor,
      name: musicTitle,
      track_file: track_file,
      duration_in_seconds: time,
      progress: 0,
      id: id,
      stared_user: stared_user,
    });
    dispatch(setCurrentTracks(id));
    dispatch(setNewTracks(tracks));
  };
  const authUser = JSON.parse(sessionStorage.getItem("user"));

  const [like, { likeError }] = useLikeTrackMutation();
  const [dislike, { dislikeError }] = useDislikeTrackMutation();

  const userLike = (tracks?.stared_user ?? []).find(
    ({ id }) => id === authUser.id
  );
  const [isLiked, setIsLiked] = useState(userLike);

  useEffect(() => {
    setIsLiked(userLike);
  }, [userLike]);

  const handleLike = async (id) => {
    setIsLiked(true);
    await like({ id }).unwrap();
    dispatch(setNewTracks(tracks));
  };

  const handleDislike = async (id) => {
    setIsLiked(false);
    await dislike({ id }).unwrap();
    dispatch(setNewTracks(tracks));
  };

  return { error } ? (
    tracks &&
      tracks.map((song) => {
        return (
          <S.PlaylistItem
            key={song.id}
            onClick={() => {
              playTrack(
                song.author,
                song.name,
                song.track_file,
                song.duration_in_seconds,
                song.id
              );
            }}
          >
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage>
                  {play && isPlaying?.id === song.id ? (
                    <S.TrackSvg alt="music"></S.TrackSvg>
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
                </S.TrackTitleImage>
                <S.TrackAuthor>
                  <S.TrackTitleLink>
                    {song.name} <S.TrackTitleSpan>{song.logo}</S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackAuthor>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink>{song.author}</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">{song.album}</S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                {isLiked && isPlaying?.id === song.id ? (
                  <S.TrackTimeSvg
                    alt="like"
                    onClick={() => handleDislike(song.id)}
                  >
                    <use
                      xlinkHref="img/icon/sprite.svg#icon-like"
                      fill="#696969"
                    ></use>
                  </S.TrackTimeSvg>
                ) : (
                  <S.TrackTimeSvg
                    alt="like"
                    onClick={() => handleLike(song.id)}
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSvg>
                )}
                <S.TrackTimeText>
                  {formatTime(
                    Math.floor((song.duration_in_seconds % 3600) / 60)
                  )}
                  :
                  {formatTime(
                    Math.floor((song.duration_in_seconds % 3600) % 60)
                  )}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        );
      })
  ) : (
    <h2>В этом плейлисте нет треков</h2>
  );
};
