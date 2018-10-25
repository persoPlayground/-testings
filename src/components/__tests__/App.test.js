import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<App />);
  })
  it('shows the comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
  });
  it('shows the comment List', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
})


