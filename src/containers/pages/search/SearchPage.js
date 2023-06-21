import React, { useState } from 'react'
import styled from 'styled-components';
import { MainContent } from '../../../components/common/CommonStyles';
import Filter from '../../../components/filter/Filter';
import SearchBar from '../../../components/searchBar/SearchBar';
import { data } from '../../../mockData/data';
import MusicsList from '../../musicsList/MusicsList';

const MainContentSearchPage = styled(MainContent)`
  padding-top: 26px;
`

const SearchPage = () => {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const handleChange = (event) => {
    setText(event.target.value);
    const updatedData = [...data].filter(each => {
      return each.music.toUpperCase().includes(event.target.value.toUpperCase());
    });
    setFilteredData(updatedData);
  };
  const clearInput = () => {
    setText("");
  };
  return (
    <MainContentSearchPage>
      <SearchBar text={text} handleChange={handleChange} clearInput={clearInput}/>
      {text && <Filter page="/search"/>}
      {text && filteredData.length > 0 && <MusicsList data={filteredData} notGrid/>}
    </MainContentSearchPage>
  )
}

export default SearchPage