import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, AppRegistry, Alert, AsyncStorage } from 'react-native';

import registerScreens from './Screens/screens';

import { Provider } from "react-redux";

import { AccessToken } from 'react-native-fbsdk';

// import * as reducers from "./store/reducer/index";
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

import store from './store/store';

registerScreens(store, Provider);


class App extends React.Component {
  constructor(props){
    super(props);
      this.showApp();
      this.status = false;
  }
  async showApp() {
    let auth = await AsyncStorage.getItem('userId');
    if(!auth) {
      return await this.beforeLogin();
    }
    this.status = true;
    return await this.afterLogIn();
  }

  async beforeLogin() {
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
          label: 'Nutrition',
          screen: 'FoodScreen',
          icon: require('./img/Food.png'),
          selectedIcon: require('./img/Food.png'),
          title: 'Nutrition',
        },
        {
          label: 'Login',
          screen: 'LoginScreen',
          icon: require('./img/FBLogin.png'),
          selectedIcon: require('./img/FBLogin.png'),
          title: 'Login',
          navigatorStyle: {
            navBarHidden: true,
            tabBarHidden: true
          }
        },
      ]
    });
  }

  async afterLogIn() {
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
          label: 'Nutrition',
          screen: 'FoodScreen',
          icon: require('./img/Food.png'),
          selectedIcon: require('./img/Food.png'),
          title: 'Nutrition',
        },
        {
          label: 'Profile',
          screen: 'ProfileScreen',
          icon: require('./img/Profile.png'),
          selectedIcon: require('./img/Profile.png'),
          title: 'Profile'
        },
      ]
    });
  }

  async showModal() {
    await Navigation.showModal({
      screen: 'LoginScreen',
      title: 'Regular Exercise',
      animationType: 'slide-up',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  async dismissModal() {
    setTimeout(() => {
      Navigation.dismissModal();
    }, 200)
  }
}

let Regcise = new App();

store.subscribe(() => {
  if (Regcise.status == false && store.getState().authReducer.token) {
    Regcise.status = true;
    return setTimeout(() => {
      return Regcise.afterLogIn();
    }, 500)
  } else if (Regcise.status == true && !store.getState().authReducer.token) {
    Regcise.status = false;
    return Regcise.beforeLogin();
  }
});

export default Regcise;
