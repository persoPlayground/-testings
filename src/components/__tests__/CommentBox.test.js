import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';


describe('Comment Box', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <Root>
      <CommentBox />
    </Root>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a text area and button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
  });

  describe('the text area', () => {

    beforeEach(() => {
      wrapper.find('textarea').simulate('change', { target: { value: 'new comment'}});
    });
    it('user can type in the text area', () => {
     // expect(wrapper.state().comment).toEqual('new comment');
       // ---- OR ---:
      wrapper.update();
      expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    
    });
  
    it('empty the text area when submit', () => {
      //NO CLICK EVENT registred in the button
      wrapper.update();
      wrapper.find('form').simulate('submit');
      expect(wrapper.find('textarea').prop('value')).toEqual('');
    });

  })
 
})


