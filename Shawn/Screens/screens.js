import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Food from './Food';
import FoodHistory from './FoodHistory';
import Exercise from './Exercise';
import ExerciseHistory from './ExerciseHistory';
import ExerciseContent from './ExerciseContent';
import FavoriteFoodList from './FavoriteFoodList';
import FavoriteExerciseList from './FavoriteExerciseList';


export default registerScreens = (store, provider) =>  {
	Navigation.registerComponent('HomeScreen', () => Home, store, provider);
    Navigation.registerComponent('ProfileScreen', () => Profile, store, provider);
    Navigation.registerComponent('LoginScreen', () => Login, store, provider);
    Navigation.registerComponent('FoodScreen', () => Food, store, provider);
    Navigation.registerComponent('FoodHistoryScreen', () => FoodHistory, store, provider);
    Navigation.registerComponent('ExerciseScreen', () => Exercise, store, provider);
    Navigation.registerComponent('ExerciseHistoryScreen', () => ExerciseHistory, store, provider);
    Navigation.registerComponent('ExerciseContentScreen', () => ExerciseContent, store, provider);
    Navigation.registerComponent('FavoriteFoodScreen', () => FavoriteFoodList, store, provider);
    Navigation.registerComponent('FavoriteExerciseScreen', () => FavoriteExerciseList, store, provider);
};