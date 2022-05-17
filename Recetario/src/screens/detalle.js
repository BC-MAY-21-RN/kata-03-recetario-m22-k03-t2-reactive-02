import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import productos from '../Productos/productos.json';
import CustomButtom from '../components/atoms/CustomButtom';

const Detalle = ({route, navigation}) => {
  const {id, titulo} = route.params;
  const product = productos.filter(item => item.id === id)[0];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.img}} />
      <View style={styles.iconBar}>
        <CustomButtom
          name="close"
          onPress={() => {
            navigation.navigate({
              name: 'Principal',
              params: {post: product},
              merge: true,
            });
          }}
        />
        <View style={styles.iconPack}>
          <CustomButtom
            name="share-apple"
            onPress={() => console.log('compartir')}
          />
          <CustomButtom name="heart" onPress={() => console.log('like')} />
        </View>
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>{titulo}</Text>
      <Text style={styles.subtitle2}>Ingredients</Text>
      <Text style={styles.subtitle}>for {product.servings} servings</Text>
      <FlatList
        style={styles.flatStyle}
        data={product.ingredients}
        renderItem={({item}) => (
          <View style={styles.flatItem}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282929',
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 150,
    fontWeight: 'bold',
    color: '#dfdfde',
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dfdfde',
    marginLeft: 20,
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dfdfde',
    marginLeft: 20,
    marginTop: 100,
  },
  text: {
    color: '#dfdfde',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    opacity: 0.5,
  },
  flatItem: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderStyle: 'solid',
    borderBottomWidth: 0.6,
    marginLeft: 20,
    paddingBottom: 15,
    marginRight: 20,
  },
  flatStyle: {
    marginTop: 10,
    height: 250,
    flexGrow: 0,
  },
  iconBar: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconPack: {
    flexDirection: 'row',
  },
});

export default Detalle;
