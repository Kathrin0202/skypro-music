import * as S from "./filter.style";

export function Filter({
  openFilter,
  type,
  valueType,
  setValueType,
  onClick,
  title,
  choice = true,
}) {
  const toggleFilter = (item) => {
    const index = valueType.indexOf(item);
    if (choice) {
      if (index > -1) {
        setValueType(valueType.toSpliced(index, 1));
      } else {
        setValueType([...valueType, item]);
      }
      return;
    }
    setValueType(item);
  };
  
  return (
    <>
      <div>
        <S.FilterButton
          $active={openFilter ? "active" : "notActive"}
          onClick={onClick}
        >
          {title}
          {openFilter && (
            <S.FilterWrap>
              {type.map((item, index) => (
                <S.TextWrap key={index} onClick={() => toggleFilter(item)}>
                  {valueType.includes(item) ? <S.Text>{(item)}</S.Text> : (item)}
                </S.TextWrap>
              ))}
            </S.FilterWrap>
          )}
          {valueType.length > 0 && !(valueType[0] === "По умолчанию") ? (
            <S.Circle>{valueType.length}</S.Circle>
          ) : null}
        </S.FilterButton>
      </div>
    </>
  );
}
