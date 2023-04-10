import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchInputValue } from '../../redux/slices/SearchSlice';

import search from '../../images/icons/search.svg';
import clear from '../../images/icons/clear.svg';

function Search() {
  const [isActive, setIsActive] = React.useState(true);
  const searchValue = useSelector((state) => state.SearchSlice.searchInputValue);
  const dispatch = useDispatch();

  const handleChangeSearchInput = (e) => {
    dispatch(setSearchInputValue(e.target.value));
  };

  const handleClearInput = () => {
    dispatch(setSearchInputValue(''));
  };

  const handleClickInputSearch = (e) => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? 'search active' : 'search'}>
      <img src={search} alt="searcg" className="search__img" />
      <input
        type="text"
        placeholder="Поиск лабоньки"
        className="search__input"
        value={searchValue}
        onChange={handleChangeSearchInput}
        onClick={handleClickInputSearch}
      />
      {searchValue && (
        <img src={clear} alt="clear" className="search__clear" onClick={handleClearInput} />
      )}
    </div>
  );
}

export default Search;
