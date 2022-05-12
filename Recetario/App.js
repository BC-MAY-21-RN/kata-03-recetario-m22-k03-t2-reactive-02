import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'aqua',
    flex: 1,
  },
});

export default App;
