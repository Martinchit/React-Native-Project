import React from 'react';
import { View, Text, Alert, AsyncStorage } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class FBLoginButton extends React.Component {

   async storeData(token) {
    try {
      await AsyncStorage.setItem('userId', token);
    } catch (error) {
      Alert.alert(error);
    }
  }

  async removeData() {
    try {
      await AsyncStorage.removeItem('userId');
    } catch (error) {
      Alert.alert(error);
    }
  }

  loginSuccess = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      this.storeData(data.accessToken.toString())
      this.initUser(data.accessToken.toString())
    })
  }

  initUser = (token) => {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((ref) => {
      let obj = {};
      obj.token = token;
      obj.userId = ref.id;
      obj.name = ref.name;
      obj.email = ref.email;
      obj.profilePicture = "http://graph.facebook.com/" + ref.id + "/picture?type=large&width=160&height=160";
      this.props.authSuccess(obj);
    })
  }
  
  logout = () => {
    this.removeData();
    this.props.logout();
  }

  componentDidMount() {
    AccessToken.getCurrentAccessToken().then((data) => {
      if(data && !this.props.token) {
        this.initUser(data.accessToken.toString());
      }
    });
  }

  render() {
    return (
      <View>
        <LoginButton
          onPress = {this.props.authStart}
          onLoginFinished={
            (error, result) => {
              if (error) {
                this.props.authFail
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                this.loginSuccess();
              }
            }
          }
          onLogoutFinished={() => this.logout()} />
      </View>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
      authStart: () => dispatch(actions.authStart()),
      authSuccess: (authData) => dispatch(actions.authSuccess(authData)),
      authFail: (err) => dispatch(actions.authFail(err)),
      logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(FBLoginButton);