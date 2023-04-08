import React, { useEffect, useState } from 'react';
import Icon from '../assets/search-icon.png';
type SearchVal = {
  handleSearch :(name: string) => void
}

const Search = ({ handleSearch }: SearchVal) => {
  const [searchVal, setSearchVal] = useState(localStorage.getItem('search') ?? '');
  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchVal);
    };
  }, [searchVal]);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch(searchVal)
    }
  }
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
