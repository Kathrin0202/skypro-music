import { Track } from "../Track/Track";
import { useEffect, useState } from "react";
import { SceletonCard } from "../Track/sceleton";
import { Filter } from "../Filter/filter";
import * as S from "./trackList.style";

export function TrackList() {
  const [isLoading, setLoading] = useState([]);
  const [songs, setPosts] = useState(false);
  useEffect(() => {
    setLoading(true);
    const time = setTimeout(() => {
      setPosts(songs);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(time);
  }, []);
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
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
          {isLoading ? <SceletonCard /> : <Track />}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
