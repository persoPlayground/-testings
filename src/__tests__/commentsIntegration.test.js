import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {name: 'c1'},
            {name: 'c2'}
        ]
    })
});
afterEach(() => {
    moxios.uninstall();
})
it('can fetch list of comments', (done) => {
const warapper = mount(<Root><App/></Root>);
warapper.find('button').at(1).simulate('click');
moxios.wait(()=>{
    warapper.update();
    expect(warapper.find('li').length).toEqual(2);
    done();
    warapper.unmount()
});
});