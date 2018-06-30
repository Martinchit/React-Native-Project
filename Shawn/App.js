import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, AppRegistry } from 'react-native';

import registerScreens from './Screens/screens';

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
    await Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'HomeScreen',
          icon: require('./img/Home.png'),
          selectedIcon: require('./img/Home.png'), 
          title: 'Regcise',
        },
        {
          label: 'Exercise',
          screen: 'ExerciseScreen',
          icon: require('./img/Exercise.png'),
          selectedIcon: require('./img/Exercise.png'),
          title: 'Exercise'
        },
        {
          label: 'Diet',
          screen: 'FoodScreen',
          icon: require('./img/Food.png'),
          selectedIcon: require('./img/Food.png'),
          title: 'Diet',
        },
        {
          label: 'Profile',
          screen: 'ProfileScreen',
          icon: require('./img/Profile.png'),
          selectedIcon: require('./img/Profile.png'),
          title: 'Profile'
        }
      ]
    });
    AccessToken.getCurrentAccessToken().then((data) => {
      if(!data) {
        this.showModal();
      } else {
        this.dismissModal();
      }
    });
  }
  showModal() {
    Navigation.showModal({
      screen: 'LoginScreen',
      title: 'Regular Exercise',
      animationType: 'slide-up',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }
  dismissModal() {
    Navigation.dismissAllModals();
  }
}

let Regcise = new App();

store.subscribe(() => {
  if (store.getState().authReducer.token) {
    Regcise.dismissModal();
  } else {
    Regcise.showModal();
  }
});

export default Regcise;
