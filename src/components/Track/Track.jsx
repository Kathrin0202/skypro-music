import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from "../../services/myTracks";
import { useAuthSelector } from "../../store/slices/auth";
import { setCurrentTracks, setNewTracks } from "../../store/slices/playlist";
import * as S from "./sceleton.style";
function formatTime(number) {
  let time = String(number);
  if (time.length < 2) return `0${time}`;
  return time;
}

export const TrackPage = ({ setCurrentTrack, error, song }) => {
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
    dispatch(
      setCurrentTracks({
        author: musicAuthor,
        name: musicTitle,
        track_file: track_file,
        duration_in_seconds: time,
        progress: 0,
        id: id,
        stared_user: stared_user,
      })
    );
    dispatch(setNewTracks(song));
  };
  const [like, { likeError }] = useLikeTrackMutation();
  const [dislike, { dislikeError }] = useDislikeTrackMutation();
  const auth = useAuthSelector();
  const authUser = Boolean(song.stared_user.find(({ id }) => id === auth.id));
  const [isLiked, setIsLiked] = useState(authUser);
  useEffect(() => {
    setIsLiked(authUser);
  }, [authUser]);
  
  const handleLike = async (id) => {
    setIsLiked(true);
    await like({ id }).unwrap();
  };

  const handleDislike = async (id) => {
    setIsLiked(false);
    await dislike({ id }).unwrap();
  };

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id);

  return (
    <S.PlaylistItem
      onClick={() => {
        playTrack(
          song.author,
          song.name,
          song.track_file,
          song.duration_in_seconds,
          song.id,
          song.stared_user
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
          <S.TrackTimeSvg
            alt="like"
            onClick={() => {
              toggleLikeDislike(song.id);
            }}
          >
            {isLiked ? (
              <use
                xlinkHref="img/icon/sprite.svg#icon-like"
                fill="#B672FF"
              ></use>
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formatTime(Math.floor((song.duration_in_seconds % 3600) / 60))}:
            {formatTime(Math.floor((song.duration_in_seconds % 3600) % 60))}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};
