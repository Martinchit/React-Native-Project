import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, TextProps, Picker, Vibration, Keyboard } from 'react-native';
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
      selectedItem: null,
      showItem: null,
      quantity: 1,
    };
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'history') {
        this.props.navigator.push({
            screen: 'FoodHistoryScreen',
            title: 'Search History',
            backButtonTitle: "Back",
        });
      }
    }
  }

  checkCalories() {
    const data = this.state.text[0].toUpperCase() + this.state.text.slice(1);
    const food = `${this.state.quantity} ${this.state.text}`;
    this.props.checkFood(food);
    Vibration.vibrate(1);
    this.setState({selectedItem: data, text: null, quantity: 1});
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
            placeholder={"Input the Food"}
            placeholderTextColor={"#EDEDED"}
            onChangeText={text => {
              this.instantSuggest(text);
              this.setState({ text: text, selected: false });
            }}
            style={{ height: 40, width: 200, borderColor: '#EDEDED', borderWidth: 5, color: 'white',fontSize: 18}}
            listStyle={{height: 80}}
            renderItem={item => (
              <TouchableOpacity 
                onPress={() => {
                  Keyboard.dismiss();
                  this.setState({ text: item, selected: true });
                }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <View>
          <Picker
            selectedValue={this.state.quantity}
            itemStyle={Styles.FoodSmallPicker}
            style={{ height: 20, width: 50, marginTop: 0, marginBottom: 50 }}
            onValueChange={(itemValue, itemIndex) => this.setState({quantity: itemValue})}>
            {Array(10).fill('').map((ele,idx) => <Picker.Item key={idx} label={String(idx+1)} value={String(idx+1)} />)}
          </Picker>
          </View>
          <Button style={Styles.FoodInputButton} isDisabled={!this.state.text} onPress={() => this.checkCalories()}>
              <Text style={{color: '#EDEDED', fontWeight: '900', fontSize: 20}}>Check</Text>
          </Button>
          <Text style={{fontSize: 25, fontWeight: '800', color: '#EDEDED'}}>{this.state.selectedItem? this.state.selectedItem: 'Result'}</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', width: size.width / 1.1, marginTop: 30}}>
            <View >
              <Image style={Styles.FoodImage} source={require('../img/Calories.png')}/>
              <Text style={{marginTop: 10, color: '#EDEDED', fontWeight: '900', textAlign: 'center'}}>Calories</Text>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.props.showItemInfo? this.props.showItemInfo.calories : null}</Text>
            </View>
            <View >
              <Image style={Styles.FoodImage} source={require('../img/Fats.png')}/>
              <Text style={{marginTop: 10, color: '#EDEDED', fontWeight: '900', textAlign: 'center'}}>Fats</Text>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.props.showItemInfo? this.props.showItemInfo.fat : null}</Text>
            </View>
            <View >
              <Image style={Styles.FoodImage} source={require('../img/Carbonhydrate.png')}/>
              <Text style={{marginTop: 10, color: '#EDEDED', fontWeight: '900', textAlign: 'center'}}>Carbsg</Text>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.props.showItemInfo? this.props.showItemInfo.carb : null}</Text>
            </View>
            <View >
              <Image style={Styles.FoodImage} source={require('../img/Proteins.png')}/>
              <Text style={{marginTop: 10, color: '#EDEDED', fontWeight: '900', textAlign: 'center'}}>Protein</Text>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 10, fontSize: 18, fontWeight: '700'}}>{this.props.showItemInfo? this.props.showItemInfo.protein : null}</Text>
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
    foods: state.checkFoodReducer.foods,
    showItemInfo: state.checkFoodReducer.showItemInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkFood: (food) => dispatch(actions.check_food(food))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Food);