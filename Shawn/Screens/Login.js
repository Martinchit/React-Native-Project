import React from 'react';
import { View, Text, Image } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import Styles from '../Style/Style';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
  }

  render() {
      return (
        <View style={Styles.core}>
          <View style={Styles.backgroundImageViewBox}>
            <Image style={Styles.backgroundImage} source={{ url: this.state.link }} />
          </View>
          <View style={Styles.loginContent}>
            <FBLoginButton style={Styles.centerBtn}/>
          </View>
        </View>
      );
    }

}

export default Login;