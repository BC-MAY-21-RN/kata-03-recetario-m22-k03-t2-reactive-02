import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const CustomButtom = props => {
  const {name, color, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={50} color={color} />
    </TouchableOpacity>
  );
};

export default CustomButtom;
