import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavButton from './NavButton';

let mockProps = {
  category: 'mock category',
  setCategory: jest.fn()
};

describe('NavButton', () => {
  let navButton;

  beforeEach(() => {
    navButton = shallow(<NavButton {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(navButton).toMatchSnapshot();
  });

  it('calls props.setCategory when clicked with correct args', () => {
    const button = navButton.find('button');
    button.simulate('click');

    expect(mockProps.setCategory).toHaveBeenCalledTimes(1);
    expect(mockProps.setCategory).toHaveBeenCalledWith('mock category');
  });
});
