import React, { useEffect, useState } from 'react';
import Icon from '../assets/search-icon.png';

const Search = () => {
  const [searchVal, setSearchVal] = useState(localStorage.getItem('search') ?? '');
  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchVal);
    };
  }, []);
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
      />
    </div>
  );
};

export default Search;
