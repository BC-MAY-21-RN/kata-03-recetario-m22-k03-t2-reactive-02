import 'react-native';
import React from 'react';
import Detalle from '../src/screens/detalle';

const product = {
  id: 1,
  title: 'Lemon Pie',
  img: 'https://t2.rg.ltmcdn.com/es/posts/2/7/7/lemon_pie_saludable_75772_600.jpg',
  ingredients: [
    {name: 'egg white', amount: '1'},
    {name: 'wholemeal flour', amount: '70 grams'},
    {name: 'oatmeal', amount: '30 grams'},
    {name: 'sugar', amount: '1 tablespoon'},
    {name: 'yolk', amount: '1'},
    {
      name: 'skim milk or unsweetened vegetable milk',
      amount: '200 milliliters',
    },
    {name: 'lemon juice and zest', amount: '1/2 juice'},
  ],
  like: false,
  servings: '6',
};

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Detalle route={{params: product}} />).toJSON();
  expect(tree).toMatchSnapshot();
});