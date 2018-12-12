import LoginForm from './Forms/Login.forms';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import React from 'react';

test('Login form renders correctly', () => {
    const rendered = renderer.create(
        <LoginForm />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});

test('Login form calls submit with username and password values when clicked', () => {
    const signIn = jest.fn();
    const wrapper = mount(
        <LoginForm signIn={signIn} />
    );
    wrapper.find('#username').simulate('change', { target: { name: 'username', value: 'fsadmin' } });
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'password' } });

    const signInButton = wrapper.find('button');
    signInButton.simulate('click');
    expect(signIn).toBeCalledWith({ username: 'fsadmin', password: 'password' });
});