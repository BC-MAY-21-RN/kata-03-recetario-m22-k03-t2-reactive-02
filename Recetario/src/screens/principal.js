import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Principal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Detalles"
        onPress={() => {
          navigation.navigate('Detalle');
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

export default Principal;
