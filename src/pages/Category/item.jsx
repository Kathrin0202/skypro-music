import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "../../services/myTracks";
import * as S from "../../components/TrackList/trackList.style";
import { SceletonCard } from "../../components/Track/sceleton";
import { TrackPage } from "../../components/Track/Track";

export const Item = (setCurrentTrack) => {
  const params = useParams();
  const { data, error, isLoading } = useGetCategoryQuery({ id: params.id });
  const tracks = data?.item || [];
  const name = data?.name || "";
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH2>{name}</S.CenterblockH2>
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
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
            />
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};
