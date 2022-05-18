import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  const {pantalla, secondStyle, titulo} = props;
  return (
    <TouchableOpacity
      style={secondStyle ? styles.container2 : styles.container}
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
    borderRadius: 10,
  },
  image2: {
    width: 145,
    height: 175,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
  },
  container: {
    margin: 5,
    height: 200,
    width: 130,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  container2: {
    margin: 5,
    height: 220,
    width: 145,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
});

export default ListItem;
