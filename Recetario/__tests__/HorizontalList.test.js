import 'react-native';
import React from 'react';
import HorizontalList from '../src/components/molecules/HorizontalList';
import products from '../src/Productos/productos.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<HorizontalList productos={products} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
