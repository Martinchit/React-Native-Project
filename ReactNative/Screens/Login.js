import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import Styles from '../Style/Style';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'https://images.pexels.com/photos/931323/pexels-photo-931323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
  }

  cancelLogin() {
    this.props.navigator.switchToTab({
      tabIndex: 0,
      animated: true,
      animationType: 'fade',
    });
  }

  render() {
      return (
        <View style={Styles.core}>
          <View style={Styles.backgroundImageViewBox}>
            <Image style={Styles.backgroundImage} source={{ url: this.state.link}} />
          </View>
          <View style={Styles.loginContent}>
            <FBLoginButton style={Styles.centerBtn}/>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.cancelLogin()}>
              <Text
                style={{color: 'white', textAlign: 'center', marginBottom: 20}}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

const mapStateToProps = state => {
  return {
    userId: state.authReducer.userId,
  }
}

export default connect(mapStateToProps)(Login);