import { Navigation } from 'react-native-navigation';

export const startSigleApp = async() => {
    await Navigation.startSingleScreenApp({
        screen: {
          screen: 'LoginScreen',
          title: 'Regular Exercise',
          navigatorStyle: {navBarHidden: true}
        }
    })
};

export const startTabApp = async() => {
    await Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Home',
            screen: 'HomeScreen',
            icon: require('../img/Home.png'),
            selectedIcon: require('../img/Home.png'), 
            title: '',
          },
          {
            label: 'Exercise',
            screen: 'ExerciseScreen',
            icon: require('../img/Exercise.png'),
            selectedIcon: require('../img/Exercise.png'),
            title: 'Exercise'
          },
          {
            label: 'Diet',
            screen: 'FoodScreen',
            icon: require('../img/Food.png'),
            selectedIcon: require('../img/Food.png'),
            title: 'Diet',
          },
          {
            label: 'Profile',
            screen: 'ProfileScreen',
            icon: require('../img/Profile.png'),
            selectedIcon: require('../img/Profile.png'),
            title: 'Profile'
          },
        ]
    });
}
