import React from 'react';
import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';
import { GitContext } from '../Context/context';
import { RepoStatsWrapper } from '../Wrappers';


const SearchBar = () => {
  return (
    <RepoStatsWrapper>
        <h1>Search Bar  {FcSearch}</h1>
    </RepoStatsWrapper>
        

  )
}

export default SearchBar