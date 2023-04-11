import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchInputValue } from '../../redux/slices/SearchSlice';

import search from '../../images/icons/search.svg';
import clear from '../../images/icons/clear.svg';

function Search() {
  // const [isActive, setIsActive] = React.useState(true);
  const searchValue = useSelector((state) => state.SearchSlice.searchInputValue);
  const dispatch = useDispatch();
  const inputRef = React.useRef();

  const handleChangeSearchInput = (e) => {
    dispatch(setSearchInputValue(e.target.value));
  };

  const handleClearInput = () => {
    dispatch(setSearchInputValue(''));
    inputRef.current.focus();
  };

  // const handleClickInputSearch = (e) => {
  //   setIsActive(!isActive);
  // };

  return (
    <div className="search">
      <img src={search} alt="searcg" className="search__img" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск лабоньки"
        className="search__input"
        value={searchValue}
        onChange={handleChangeSearchInput}
        // onClick={handleClickInputSearch}
      />
      {searchValue && (
        <img src={clear} alt="clear" className="search__clear" onClick={handleClearInput} />
      )}
    </div>
  );
}

export default Search;
