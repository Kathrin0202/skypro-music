import { songs } from "../songs";
import * as S from "./sceleton.style";

export const Track = () => {
  return songs.map((song, index) => {
    return (
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackAuthor>
              <S.TrackTitleLink href="http://">
                {song.name} <S.TrackTitleSpan>{song.add}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackAuthor>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{song.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{song.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>{song.time}</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  });
};
