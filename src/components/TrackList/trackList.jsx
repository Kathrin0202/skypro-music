import { TrackPage } from "../Track/Track";
import { SceletonCard } from "../Track/sceleton";
import { Filter } from "../Filter/filter";
import * as S from "./trackList.style";
import { useState } from "react";

export function TrackList({ isLoading, setCurrentTrack, tracks }) {
  const [searchType, setSearchType] = useState("");
  const [authorsType, setAuthorsType] = useState([]);
  const [genreType, setGenreType] = useState([]);
  const [yearType, setYearType] = useState(["по умолчанию"]);

  const uniq = (value, index, array) => array.indexOf(value) === index;

  function compare(a, b) {
    var dateA = new Date(a.release_date);
    var dateB = new Date(b.release_date);

    return dateB - dateA;
  }

  const genres = tracks
    .map(({ genre }) => genre)
    .filter((i) => i)
    .filter(uniq)
    .sort();

  const authors = tracks
    .map(({ author }) => author ?? "Неизвестный исполнитель")
    .filter((i) => i)
    .filter(uniq)
    .sort();

  const year = ["по умолчанию", "сначала старые", "сначала новые"];
  const [openFilter, setOpenFilter] = useState(null);

  const selectCategory = (category) => {
    setOpenFilter(openFilter === category ? null : category);
  };

  const filteredText = () => {
    let filterTrack = tracks;

    if (searchType.length > 0) {
      filterTrack = filterTrack.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchType.toLocaleLowerCase())
      );
    }
    if (authorsType.length > 0) {
      filterTrack = filterTrack.filter(({ author }) =>
        authorsType.includes(author)
      );
    }
    if (genreType.length > 0) {
      filterTrack = filterTrack.filter(({ genre }) =>
        genreType.includes(genre)
      );
    }
    if (yearType === year[1]) {
      filterTrack = [...filterTrack].sort(compare).slice(0);
    }
    if (yearType === year[2]) {
      filterTrack = [...filterTrack].sort(compare).reverse().slice(0);
    }
    return filterTrack;
  };
  const filterTrack = filteredText();

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        />
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <Filter
          title="исполнителю"
          openFilter={openFilter === "author"}
          valueType={authorsType}
          type={authors}
          setValueType={setAuthorsType}
          onClick={() => selectCategory("author")}
        />
        <Filter
          title="жанру"
          openFilter={openFilter === "genre"}
          valueType={genreType}
          type={genres}
          setValueType={setGenreType}
          onClick={() => selectCategory("genre")}
        />
        <Filter
          title="году"
          type={year}
          openFilter={openFilter === "release_date"}
          valueType={yearType}
          setValueType={setYearType}
          onClick={() => selectCategory("release_date")}
          choice={false}
        />
      </S.CenterblockFilter>
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
          ) : tracks.length > 0 ? (
            filterTrack.length > 0 ? (
              filterTrack.map((song) => (
                <TrackPage
                  key={song.id}
                  setCurrentTrack={setCurrentTrack}
                  song={song}
                />
              ))
            ) : (
              <h2>Ничего не найдено</h2>
            )
          ) : (
            <h2>В этом плейлисте нет треков</h2>
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
