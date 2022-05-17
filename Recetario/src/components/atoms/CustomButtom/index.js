import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const CustomButtom = props => {
  const {name, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={50} color="#f4f5f4" />
    </TouchableOpacity>
  );
};

export default CustomButtom;
