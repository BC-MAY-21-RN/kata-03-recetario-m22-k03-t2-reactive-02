import 'react-native';
import React from 'react';
import CustomButtom from '../src/components/atoms/CustomButtom';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CustomButtom />).toJSON();
  expect(tree).toMatchSnapshot();
});
