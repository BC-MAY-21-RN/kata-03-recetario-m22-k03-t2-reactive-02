import React from 'react';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const icons = <Icon name="search" size={18} color="#ffffff" />;

const Search = props => {
  return (
    <SearchBar
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      searchIcon={icons}
    />
  );
};

export default Search;
