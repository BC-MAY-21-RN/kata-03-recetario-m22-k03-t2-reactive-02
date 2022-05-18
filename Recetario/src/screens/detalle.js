import React, {useState} from 'react';
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
  const [like, setLike] = useState(product.like);
  const handleLike = () => {
    setLike(!like);
    product.like = !like;
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionsTop}>
        <Image style={styles.image} source={{uri: product.img}} />
        <View style={styles.iconBar}>
          <CustomButtom
            name="close"
            color="#f4f5f4"
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
              color="#f4f5f4"
              onPress={() => console.log('compartir')}
            />
            <CustomButtom
              name="heart"
              color={like ? '#6BFF7F' : '#f4f5f4'}
              onPress={handleLike}
            />
          </View>
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title2}>{titulo}</Text>
      </View>
      <View style={styles.sectionsBottom}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282929',
    flex: 1,
  },
  sectionsTop: {
    height: '50%',
    marginBottom: 15,
  },
  sectionsBottom: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    marginTop: '50%',
    fontWeight: 'bold',
    color: '#dfdfde',
    marginLeft: 20,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dfdfde',
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dfdfde',
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dfdfde',
  },
  text: {
    color: '#dfdfde',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  flatItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderStyle: 'solid',
    borderBottomWidth: 0.6,
    paddingBottom: 15,
    paddingTop: 15,
  },
  flatStyle: {
    marginTop: 10,
    height: 250,
    flexGrow: 0,
  },
  iconBar: {
    margin: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconPack: {
    flexDirection: 'row',
  },
});

export default Detalle;
