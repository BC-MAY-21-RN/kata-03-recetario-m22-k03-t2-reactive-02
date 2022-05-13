import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Search from '../components/atoms/SearchBar';
//import jsonData from '../Productos/productos.json';
import ListItem from '../components/atoms/ListItem';
//const productos = JSON.parse(jsonData);

const Principal = ({navigation}) => {
  const [search, setSearch] = useState();
  return (
    <View style={styles.container}>
      <Search
        placeholder="What do you want to eat?"
        value={search}
        onChangeText={a => {
          setSearch(a);
        }}
      />
      <ListItem
        title="Pizza"
        url="https://cdn3.iconfinder.com/data/icons/vol-5/128/shirt-128.png"
      />
      <Button
        title="Detalles"
        onPress={() => {
          navigation.navigate('Detalle');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A4646',
    flex: 1,
  },
});

export default Principal;
