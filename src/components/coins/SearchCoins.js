import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

export default ({onChange}) => {
  let [search, setSearch] = useState('');
  const handleSearch = (query) => {
    setSearch(query);
    if (onChange) {
      onChange(query);
    }
  };

  return (
    <SearchBar
      placeholder="Search Coin..."
      onChangeText={handleSearch}
      value={search}
    />
  );
};
