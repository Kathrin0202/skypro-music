import { useDispatch, useSelector } from "react-redux";
import { setCurrentTracks, setNewTracks } from "../../store/slices/playlist";
import * as S from "./sceleton.style";

export const TrackPage = ({ setCurrentTrack }) => {
  function formatTime(number) {
    let time = String(number);
    if (time.length < 2) return `0${time}`;
    return time;
  }
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.track.newPlaylist);
  const isPlaying = useSelector((state) => state.track.trackId);
  const play = useSelector((state) => state.track.playTrack);
  const playTrack = (musicAuthor, musicTitle, track_file, time, id) => {
    setCurrentTrack({
      author: musicAuthor,
      name: musicTitle,
      track_file: track_file,
      duration_in_seconds: time,
      progress: 0,
      id: id,
    });
    dispatch(setCurrentTracks(id));
    dispatch(setNewTracks(tracks));
  };
  return (
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
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>
                {formatTime(Math.floor((song.duration_in_seconds % 3600) / 60))}
                :
                {formatTime(Math.floor((song.duration_in_seconds % 3600) % 60))}
              </S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      );
    })
  );
};
