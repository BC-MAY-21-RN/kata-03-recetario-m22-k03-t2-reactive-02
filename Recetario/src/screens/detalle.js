import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Detalle = ({navigation}) => {
  return (
    <View style={styles.container}>
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
});

export default Detalle;
