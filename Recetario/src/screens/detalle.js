import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import productos from '../Productos/productos.json';

const Detalle = ({route, navigation}) => {
  const {id} = route.params;
  const product = productos.filter(item => item.id === id)[0];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.img}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>{id}</Text>
      <Button
        title="Volver"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 150,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    margin: 7,
    borderRadius: 10,
    position: 'absolute',
  },
});

export default Detalle;
