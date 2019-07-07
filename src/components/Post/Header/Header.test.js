// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  const props = {
    children: 'test',
    description: 'test',
    title: 'test'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
