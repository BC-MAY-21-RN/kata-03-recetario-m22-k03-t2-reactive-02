import React from 'react';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const icons = <Icon name="search" size={18} color="#ffffff" />;

const Search = props => {
  return (
    <SearchBar
      inputContainerStyle={styles.Search}
      containerStyle={styles.containerBar}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      searchIcon={icons}
    />
  );
};

const styles = StyleSheet.create({
  Search: {
    borderRadius: 10,
    backgroundColor: '#343435',
    margin: 5,
    padding: 5,
  },
  containerBar: {
    backgroundColor: '#282828',
    borderBottomColor: 'transparent',
  },
});

export default Search;
