/* eslint-disable no-unused-vars */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Search from '../components/atoms/SearchBar';
import productos from '../Productos/productos.json';
import HorizontalList from '../components/molecules/HorizontalList';

const prop = productos;
const Principal = ({navigation, route}) => {
  const [search, setSearch] = useState();
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    if (route.params?.post) {
      for (let i = 0; i < recent.length; i++) {
        if (recent[i].id === route.params.post.id) recent.splice(i, 1);
      } // Busca y Elimina el item repetido
      let newArry = [route.params.post, ...recent]; // Agrega el nuevo item
      if (newArry.length > 4) newArry.splice(4, 1); // Elimina el ultimo item
      setRecent(newArry);
    }
  }, [route.params?.post]); // Solo se reenderiza si cambia el valor

  return (
    <View style={styles.container}>
      <Search
        placeholder="What do you want to eat?"
        value={search}
        onChangeText={a => {
          setSearch(a);
        }}
      />
      <HorizontalList pantalla={navigation} title="TRENDING" productos={prop} />
      <HorizontalList pantalla={navigation} title="RECENT" productos={recent} />
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
