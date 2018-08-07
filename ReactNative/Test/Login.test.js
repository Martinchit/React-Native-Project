import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'react-native-mock/mock';
import { Navigation } from 'react-native-navigation';
// import Home from '../Screens/Home';

configure({adapter: new Adapter()});


describe('Login', () => {

    it('Without auth should be login modal', () => {
        Navigation.getCurrentlyVisibleScreenId().then((data) => {
            expect(data).toEqual("LoginScreen")
        })
    })
   
})