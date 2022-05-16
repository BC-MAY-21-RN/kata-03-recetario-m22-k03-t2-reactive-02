import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  const navigation = props.pantalla;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Detalle', {
          id: props.id,
        });
      }}>
      <Image style={styles.image} source={{uri: props.url}} />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    margin: 7,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    margin: 5,
  },
});

export default ListItem;
