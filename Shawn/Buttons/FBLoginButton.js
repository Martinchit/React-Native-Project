import React from 'react';
import { View, Text } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Navigation } from 'react-native-navigation';

class FBLoginButton extends React.Component {

  initUser(token) {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((ref) => {
      let obj = {};
      obj.token = token;
      obj.userId = ref.id;
      obj.name = ref.name;
      obj.email = ref.email;
      obj.profilePicture = "http://graph.facebook.com/" + ref.id + "/picture?type=large&width=720&height=720";
      this.props.authSuccess(obj);
    });
  }

  componentWillMount() {
    AccessToken.getCurrentAccessToken().then((data) => {
      if(data && !this.props.token) {
        this.initUser(data.accessToken.toString())
      }
    });
  }
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={["email"]}
          onPress = {this.props.authStart}
          onLoginFinished={
            (error, result) => {
              if (error) {
                this.props.authFail
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                    this.initUser(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={this.props.logout} />
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