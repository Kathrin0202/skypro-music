import { TrackPage } from "../Track/Track";
import { SceletonCard } from "../Track/sceleton";
import { Filter } from "../Filter/filter";
import * as S from "./trackList.style";
import { Search } from "../Search/search";

export function TrackList({ isLoading, setCurrentTrack, tracks }) {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
          <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
          <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
          <S.PlaylistTitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleCol4>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {isLoading ? (
            <SceletonCard />
          ) : (
            tracks.map((song) => (
              <TrackPage
                key={song.id}
                setCurrentTrack={setCurrentTrack}
                song={song}
              />
            ))
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
