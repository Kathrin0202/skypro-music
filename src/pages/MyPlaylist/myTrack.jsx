import { SceletonCard } from "../../components/Track/sceleton";
import { TrackPage } from "../../components/Track/Track";
import * as S from "../../components/TrackList/trackList.style";
import { useGetAllMyTracksQuery } from "../../services/myTracks";
import { useAuthSelector } from "../../store/slices/auth";
import { MyTrackList } from "./myTrackList";

export function MyTrack({ setCurrentTrack }) {
  const auth = useAuthSelector();
  const { data = [], isLoading, error } = useGetAllMyTracksQuery({ auth });
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH2>Мои треки</S.CenterblockH2>
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
            <TrackPage
              error={error}
              tracks={data}
              setCurrentTrack={setCurrentTrack}
            />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
