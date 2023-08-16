import * as S from "./sceleton.style";

export const TrackPage = ({ tracks, setCurrentTrack }) => {
  function formatTime(number) {
    let time = String(number);
    if (time.length < 2) return `0${time}`;
    return time;
  }

  const playTrack = (musicAuthor, musicTitle, track_file, time) => {
    setCurrentTrack({
      author: musicAuthor,
      name: musicTitle,
      track_file: track_file,
      duration_in_seconds: time,
      progress: 0,
    });
  };
  return (
    tracks &&
    tracks.map((song) => {
      return (
        <S.PlaylistItem
          key={song.id}
          onClick={() => {
            playTrack(song.author, song.name, song.track_file, song.time);
          }}
        >
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
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
