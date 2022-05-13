import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
  const url = props.url;
  console.log(url);
  return (
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn3.iconfinder.com/data/icons/vol-5/128/shirt-128.png',
        }}
      />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ListItem;
