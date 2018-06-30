import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import Styles from '../Style/Style';
import ImageOverlay from "react-native-image-overlay";
import { size } from '../shared/size';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null
    };
  }

  goFavoriteFood() {
    alert('food')
  }

  goFavoriteExercise() {
    alert('exercise')
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
            <FBLoginButton style={Styles.profileFacebookBtn}/>
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

  }
}


export default connect(mapStateToProps)(Profile);


