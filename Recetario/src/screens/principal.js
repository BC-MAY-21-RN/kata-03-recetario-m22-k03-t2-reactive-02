/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Search from '../components/atoms/SearchBar';
import productos from '../Productos/productos';
import ListItem from '../components/atoms/ListItem/listItem';

const prop = productos;

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
      <ScrollView horizontal={true}  style={styles.list}>
        {
          prop.map((item,key) => (
            <ListItem 
              title={ item.title }
              url={ item.img }
            />
          ))
        }
      </ScrollView>

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
  list:{
    backgroundColor: 'black',
  },
});

export default Principal;
