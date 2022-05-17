/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItem from '../../atoms/ListItem/listItem';

const HorizontalList = props => {
  const pantalla = props.pantalla;
  const productos = props.productos;
  return (
    <View style={styles.list}>
      <Text style = { styles.textPrincipal } >{ props.title }</Text>
        <ScrollView horizontal={true}>
        {productos.map((item, key) => (
            <ListItem key={key} title={item.title} id={item.id} url={item.img} pantalla={pantalla} />
        ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 20,
  },
  textPrincipal: {
    textAlign: 'left',
    fontSize:25,
    margin: 3,
    color: '#ad1f61',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
});

export default HorizontalList;
