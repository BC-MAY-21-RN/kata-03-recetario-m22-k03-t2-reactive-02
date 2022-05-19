import 'react-native';
import React from 'react';
import ListItem from '../src/components/atoms/ListItem/listItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
