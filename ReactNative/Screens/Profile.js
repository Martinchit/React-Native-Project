import React from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import Styles from '../Style/Style';
import ImageOverlay from "react-native-image-overlay";
import * as actions from '../store/actions/index';
import { startSigleApp } from '../shared/Navigator';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null
    };
  }

  async removeData() {
    try {
      await AsyncStorage.removeItem('userId');
    } catch (error) {
      Alert.alert(error);
    }
  }

  logoutAction = () => {
    this.removeData();
    this.props.logout();
    startSigleApp();
  }

  goFavoriteFood() {
    this.props.navigator.push({
      screen: 'FavoriteFoodScreen',
      title: 'Favorite Foods',
      backButtonTitle: "Back"
    });
  }

  goFavoriteExercise() {
    this.props.navigator.push({
      screen: 'FavoriteExerciseScreen',
      title: 'Favorite Exercises',
      backButtonTitle: "Back"
    });
  }
  
  render() {
    return (
      <View style={Styles.core} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>

        {this.props.profilePicture?
          <ImageOverlay 
            height={this.state.height*4/6} 
            source={{ url: this.props.profilePicture }} 
            contentPosition={'bottom'}
          > 
            <View style={{marginBottom: 30}}>
            <Text style={Styles.profileName}>{this.props.name}</Text>
            <FBLoginButton logoutAction={this.logoutAction} style={Styles.profileFacebookBtn}/>
            </View>
          </ImageOverlay>
          : <FBLoginButton style={Styles.profileFacebookBtn}/>
        }
        
        <TouchableOpacity onPress={() => this.goFavoriteFood()}>
          <View style={{alignItems: 'center'}}>
              <ImageOverlay
                  height={this.state.height * 1 / 6}
                  overlayAlpha={0.1}
                  source={require('../img/ProfileFood.png')}
                  title={'Favorite Food'}
                  titleStyle={Styles.profileFoodButton}
                  contentPosition={'center'}
              />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goFavoriteExercise()}>
          <View style={{alignItems: 'center'}}>
              <ImageOverlay
                  height={this.state.height * 1 / 6}
                  overlayAlpha={0.3}
                  source={require('../img/ProfileExercise.png')}
                  title={'Favorite Exercise'}
                  titleStyle={Styles.profileFoodButton}
                  contentPosition={'center'}
              />
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    userId: state.authReducer.userId,
    name: state.authReducer.name,
    profilePicture: state.authReducer.profilePicture,
    email: state.authReducer.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);