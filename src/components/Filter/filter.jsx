import { useState } from "react";
import * as S from "./filter.style";

export function Filter() {
  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? "" : filter);
  };
  const [openFilter, setOpenFilter] = useState("");

  const typeMusicOnAuthor = [
    "Michael Jackson",
    "Frank Sinatra",
    "Calvin Harris",
    "Zhu",
    "Arctic Monkeys",
  ];
  const typeMusicOnGenre = ["Рок", "Хип-Хоп", "Поп-Музыка", "Техно", "Инди"];

  const author = typeMusicOnAuthor.map((text, index) => {
    return <S.TextWrap key={index}>{text}</S.TextWrap>;
  });
  const genre = typeMusicOnGenre.map((text, index) => {
    return <S.TextWrap key={index}>{text}</S.TextWrap>;
  });
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <div>
        <S.FilterButton
          $active={openFilter === "author" ? "active" : "notActive"}
          onClick={() => toggleFilter("author")}
        >
          исполнителю
        </S.FilterButton>
        <S.FilterWrap>{openFilter === "author" && author}</S.FilterWrap>
      </div>
      <div>
        <S.FilterButton
          $active={openFilter === "year" ? "active" : "notActive"}
          onClick={() => toggleFilter("year")}
        >
          году
        </S.FilterButton>
        {openFilter === "year" && (
          <S.FilterRadio>
            <li>
              <S.FilterRadioButton
                id="radio1"
                type="radio"
                name="radio"
                value="0"
              />
              <S.Label htmlFor="radio1">Более новые</S.Label>
            </li>
            <li>
              <S.FilterRadioButton
                id="radio2"
                type="radio"
                name="radio"
                value="1"
              />
              <S.Label htmlFor="radio2">Более старые</S.Label>
            </li>
          </S.FilterRadio>
        )}
      </div>
      <div>
        <S.FilterButton
          $active={openFilter === "genre" ? "active" : "notActive"}
          onClick={() => toggleFilter("genre")}
        >
          жанру
        </S.FilterButton>
        <S.FilterWrap>{openFilter === "genre" && genre}</S.FilterWrap>
      </div>
    </S.CenterblockFilter>
  );
}
