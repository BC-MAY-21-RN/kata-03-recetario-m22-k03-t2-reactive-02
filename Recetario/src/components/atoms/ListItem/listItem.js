import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={{ uri: props.url }}
      />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default ListItem;
