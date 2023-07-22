import { useState } from "react";

export function Filter() {
  const typeMusicOnAuthor = [
    "Michael Jackson",
    "Frank Sinatra",
    "Calvin Harris",
    "Zhu",
    "Arctic Monkeys",
  ];
  const typeMusicOnGenre = ["Рок", "Хип-Хоп", "Поп-Музыка", "Техно", "Инди"];
  const typeMusicOnYear = ["более новые", "более старые"];
  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? "" : filter);
  };
  const [openFilter, setOpenFilter] = useState("");
  const onAuthor = typeMusicOnAuthor.map((text, index) => {
    return (
      <li className="text-wrap" key={index}>
        {text}
      </li>
    );
  });
  const onGenre = typeMusicOnGenre.map((text, index) => {
    return (
      <li className="text-wrap" key={index}>
        {text}
      </li>
    );
  });
  const onYear = typeMusicOnYear.map((text, index) => {
    return (
      <li className="text-wrap" key={index}>
        {text}
      </li>
    );
  });
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div>
        <ul
          className={
            openFilter === "author"
              ? "filter__button button-author _btn-text active"
              : "filter__button button-author _btn-text"
          }
          onClick={() => toggleFilter("author")}
        >
          исполнителю
        </ul>
        <div className="filter-wrap">{openFilter === "author" && onAuthor}</div>
      </div>
      <div>
        <ul
          className={
            openFilter === "year"
              ? "filter__button button-year _btn-text active"
              : "filter__button button-year _btn-text"
          }
          onClick={() => toggleFilter("year")}
        >
          году
        </ul>
        {openFilter === "year" && (
          <div className="filter-radio">
            <li>
              <input id="radio1" type="radio" name="radio" value="0" />
              <label className="label" htmlFor="radio1">
                Более новые
              </label>
            </li>
            <li>
              <input id="radio2" type="radio" name="radio" value="1" />
              <label className="label" htmlFor="radio2">
                Более старые
              </label>
            </li>
          </div>
        )}
      </div>
      <div>
        <ul
          className={
            openFilter === "genre"
              ? "filter__button button-genre _btn-text active"
              : "filter__button button-genre _btn-text"
          }
          onClick={() => toggleFilter("genre")}
        >
          жанру
        </ul>
        <div className="filter-wrap">{openFilter === "genre" && onGenre}</div>
      </div>
    </div>
  );
}
