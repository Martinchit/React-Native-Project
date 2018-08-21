import React from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import { startSigleApp, startTabApp } from '../shared/Navigator';
import { Navigation } from 'react-native-navigation';
import Styles from '../Style/Style';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
  }

  startTabAppAction = () => {
    this.forceUpdate()
  } 

  renderTab = () => {
    if (this.props.userId !== null) {
      startTabApp();
      return (
        <View></View>
      )
    } else {
      return (
        <View style={Styles.core}>
          <View style={Styles.backgroundImageViewBox}>
            <Image style={Styles.backgroundImage} source={{ url: this.state.link }} />
          </View>
          <View style={Styles.loginContent}>
            <FBLoginButton startTabAppAction={() => this.startTabAppAction()} style={Styles.centerBtn}/>
          </View>
        </View>
      )
    }
  }

  render() {
      return (
        this.renderTab()
      );
    }
}

const mapStateToProps = state => {
  return {
    userId: state.authReducer.userId,
  }
}

export default connect(mapStateToProps)(Login);