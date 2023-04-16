import React, { useState } from 'react';
import Icon from '../assets/search-icon.png';
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { saveSearchValue } from '../store/action-creator/searchValue';

const Search = () => {
  const { search } = useAppSelector((state) => state.search);
  const [searchVal, setSearchVal] = useState(search);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(saveSearchValue(searchVal));
    }
  };
  return (
    <div className="search">
      <label htmlFor="search">
        <img src={Icon} alt="Search" className="icon" />
      </label>
      <input
        id="search"
        type="search"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default Search;
