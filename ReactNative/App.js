import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, AppRegistry, Alert, AsyncStorage } from 'react-native';

import registerScreens from './Screens/screens';
import { startSigleApp, startTabApp } from './shared/Navigator';

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

import { AccessToken } from 'react-native-fbsdk';

import * as reducers from "./store/reducer/index";
import * as appActions from "./store/actions/index";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);


class App extends React.Component {
  constructor(props){
    super(props);
      this.showApp();
  }
  async showApp() {
    const value = await AsyncStorage.getItem('userId');
    if (value !== null) {
      startTabApp();
    } else {
      startSigleApp();
    }
  }
};

let Regcise = new App();

export default Regcise;
