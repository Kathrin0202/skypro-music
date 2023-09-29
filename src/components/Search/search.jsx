import { useState } from "react";
import * as S from "../TrackList/trackList.style";

export const Search = () => {
  const [searchType, setSearchType] = useState("");
  return (
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
  );
};
