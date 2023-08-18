import * as S from "./sceleton.style";

export const TrackPage = ({ tracks, setCurrentTrack }) => {
  const playTrack = (musicAuthor, musicTitle) => {
    setCurrentTrack({ author: musicAuthor, name: musicTitle });
  };
  return (
    tracks &&
    tracks.map((song) => {
      return (
        <S.PlaylistItem
          key={song.id}
          onClick={() => {
            playTrack(song.author, song.name);
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
                  {song.name} <S.TrackTitleSpan>{song.add}</S.TrackTitleSpan>
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
              <S.TrackTimeText>{song.duration_in_seconds}</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      );
    })
  );
};
