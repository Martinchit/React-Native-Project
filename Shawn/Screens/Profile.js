import React from 'react';
import { Text, View, Image } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import Styles from '../Style/Style';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <View style={Styles.core}>

        <View style={Styles.homeProfilePictureBox}>
          {this.props.profilePicture? <Image style={{flex: 1,width: '60%'}} source={{ url: this.props.profilePicture }}/> : null}
        </View>
        <View style={Styles.content}>
          <Text style={Styles.profileName}>
            {this.props.name}
          </Text>
          <FBLoginButton style={Styles.centerBtn}/>
        </View>
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

  }
}


export default connect(mapStateToProps)(Profile);