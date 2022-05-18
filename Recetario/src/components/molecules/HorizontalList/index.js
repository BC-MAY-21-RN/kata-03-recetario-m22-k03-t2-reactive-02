/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItem from '../../atoms/ListItem/listItem';

const HorizontalList = props => {
  const {pantalla, productos, isRecent} = props;
  return (
    <View>
      <Text style={styles.textPrincipal}>{props.title}</Text>
      <ScrollView horizontal={true}>
        {productos.map((item, key) => (
          <ListItem
            key={key}
            title={item.title}
            id={item.id}
            url={item.img}
            pantalla={pantalla}
            secondStyle={isRecent}
            titulo={props.title}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textPrincipal: {
    textAlign: 'left',
    fontSize: 25,
    color: '#ad1f61',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});

export default HorizontalList;
