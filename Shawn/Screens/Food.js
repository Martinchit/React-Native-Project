import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, TextProps, ScrollView } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import Styles from '../Style/Style';
import { Navigator } from 'react-native-navigation';
import axios from 'axios';
import * as actions from '../store/actions/index';
import Button from 'apsl-react-native-button';
import ImageOverlay from "react-native-image-overlay";
import config from '../Config/config';
import Autocomplete from 'react-native-autocomplete-input';
import { size } from '../shared/size';

class Food extends React.Component {
  static navigatorButtons = {
    rightButtons: [
      {
        id: 'history',
        icon: require('../img/History.png'),
        disableIconTint: true
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      text: null,
      height: null,
      suggests: [],
      selected: false,
      showItem: null
    };
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'history') {
        this.props.navigator.push({
            screen: 'FoodHistoryScreen',
            title: 'Search History',
            backButtonTitle: "Back"
        });
      }
    }
  }

  checkCalories() {
    this.props.checkFood(this.state.text);
    this.setState({text: null});
  }

  instantSuggest(input) {
    if(input) {
      axios({
        method: 'get',
        url: 'https://trackapi.nutritionix.com/v2/search/instant?query=' + input + '&branded=true&common=true&self=false',
        headers: {
            'x-app-key': config.key,
            'x-app-id': config.id,
        }
      }).then((body) => {
        const value = body.data.common.map((ele) => ele.food_name)
        this.setState({suggests: value});
      });
    }
    
  }

  render() {

    if(this.props.foods.length > 0 && this.state.showItem !== this.props.foods.slice(-1)[0]) {
      const value = this.props.foods.slice(-1)[0];
      this.setState({showItem: value});
    }

    return (
      <View style={Styles.FoodContainer} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
        <ImageOverlay
          source={require('../img/FoodSearch.jpeg')}
          height={this.state.height}
          contentPosition="top"
          overlayAlpha={0.4}
        >
        <Text style={Styles.FoodInstructions}>Food Nutrition</Text>
          <Autocomplete
            style={{width: 200}}
            data={this.state.suggests}
            defaultValue={this.state.text}
            hideResults={this.state.selected}
            onChangeText={text => {
              this.instantSuggest(text);
              this.setState({ text: text, selected: false });
            }}
            style={{ height: 40, width: 200, borderColor: '#EDEDED', borderWidth: 5, color: 'white',fontSize: 18, }}
            listStyle={{height: 80}}
            renderItem={item => (
              <TouchableOpacity 
                onPress={() => {
                  this.setState({ text: item, selected: true })
                }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button style={Styles.FoodInputButton} isDisabled={!this.state.text} onPress={() => this.checkCalories()}>
              <Text style={{color: 'white', fontWeight: '900', fontSize: 20}}>Check</Text>
          </Button>
          <Text>{this.state.text && this.state.selected? this.state.text: null}</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', width: size.width / 1.1, marginTop: 50}}>
            <View >
              <Image style={{height: 65, width: 65}} source={require('../img/Calories.png')}/>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.state.showItem? this.state.showItem.calories : null}</Text>
            </View>
            <View >
            <Image style={{height: 65, width: 65}} source={require('../img/Fats.png')}/>
            <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.state.showItem? this.state.showItem.fat : null}</Text>
            </View>
            <View >
            <Image style={{height: 65, width: 65}} source={require('../img/Carbonhydrate.png')}/>
            <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.state.showItem? this.state.showItem.carb : null}</Text>
            </View>
            <View >
            <Image style={{height: 65, width: 65}} source={require('../img/Proteins.png')}/>
            <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.state.showItem? this.state.showItem.protein : null}</Text>
            </View>
        </View>
        </ImageOverlay>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.checkFoodReducer.loading,
    error: state.checkFoodReducer.loading,
    foods: state.checkFoodReducer.foods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkFood: (food) => dispatch(actions.check_food(food))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Food);


// <TextInput
//               style={{ height: 40, width: 200, borderColor: '#EDEDED', borderWidth: 5, color: 'white',fontSize: 18, }}
//               onChangeText={(text) => {
//                 this.instantSuggest(text);
//                 this.setState({ text: text });
//               }}
//               value={this.state.text} 
//               spellCheck={true}
//           />