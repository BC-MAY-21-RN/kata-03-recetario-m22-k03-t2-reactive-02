/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Search from '../components/atoms/SearchBar';
import productos from '../Productos/productos.json';
import HorizontalList from '../components/molecules/HorizontalList';

const prop = productos;
//const productsRecent =  product;
const recent = new Array();

const Principal = ({navigation}) => {
  const [search, setSearch] = useState();
  /*useEffect(() => {
    productsRecent ? recent.push(productsRecent) : recent.push({message:'No tienes productos recientes'});
  },[]);*/

  console.log(recent);
  return (
    <View style = { styles.container }>
      <Search
        placeholder = "What do you want to eat?"
        value = { search }
        onChangeText = { a => {
          setSearch(a);
        }}
      />
      <HorizontalList pantalla= {navigation} title="TRENDING" productos = { prop }/>
      <HorizontalList pantalla= {navigation} title="RECENT" productos = { recent }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    flex: 1,
  },

});

export default Principal;
