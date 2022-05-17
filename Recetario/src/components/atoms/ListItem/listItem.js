import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  const {pantalla, secondStyle, titulo} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        pantalla.navigate('Detalle', {
          id: props.id,
          titulo: titulo,
        });
      }}>
      <Image
        style={secondStyle ? styles.image2 : styles.image}
        source={{uri: props.url}}
      />
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
  image2: {
    width: 145,
    height: 155,
    margin: 5,
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
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
    height: 200,
  },
});

export default ListItem;
