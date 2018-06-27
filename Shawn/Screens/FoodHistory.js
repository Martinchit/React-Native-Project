import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../Style/Style';

class FoodHistory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        intro: 'FoodHistory'
      };
  
    }
    render() {
      return (
        <View style={Styles.core}>
          <View style={Styles.content}>
            <Text style={Styles.profileHeader}>
              {this.state.intro}
            </Text>
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
      profilePicture: state.authReducer.profilePicture
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  }
  
  
  export default connect(mapStateToProps)(FoodHistory);
  