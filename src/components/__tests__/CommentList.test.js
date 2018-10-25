import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import CommentList from '../CommentList';
import Root from '../../Root';


describe('Comment List', () => {

  let wrapper;
  beforeEach(() => {
   
const mockStore = configureStore();
const store = mockStore({comments: ['c1', 'c2', 'c3', 'c4']});

wrapper = mount(<CommentList store={store} /> )  
  });

  afterEach(() => {
    wrapper.unmount();
  })

  it('each comment in li', () => {
    expect(wrapper.find('li').length).toEqual(4);
  });
 
})


