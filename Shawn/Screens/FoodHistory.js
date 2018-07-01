import React from 'react';
import { Text, View, Image, StyleSheet, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import * as actions from '../store/actions/favoriteList';

class FoodHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInfo: null
    };
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  handlePress = (buttonIndex) => {
      if (buttonIndex) {
        return;
      } else {
        console.log(this.foodInfo)
        this.props.addFavoriteFood(this.state.foodInfo);
      }
  }

  render() {
    return (
      <View style={styles.container} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
      <Text style={styles.welcome}>Food Log</Text>
      <View style={styles.GridContainer}>
          <View style={styles.bigGrid}>
              <Text style={styles.gridText}>#</Text>
              <Text style={styles.gridText}>Name</Text>
          </View>

          <View style={styles.smallGrid}>
              <View><Image style={{width: 30, height: 30}} source={require('../img/CaloriesIcon.png')} /></View>
              <View><Image style={{width: 30, height: 30}} source={require('../img/FatsIcon.png')} /></View>
              <View><Image style={{width: 30, height: 30}} source={require('../img/CarbohydrateIcon.png')} /></View>
              <View><Image style={{width: 30, height: 30}} source={require('../img/ProteinsIcon.png')} /></View>
          </View>
      </View>
        <ScrollView style={styles.cardContainer}>

            {this.props.foods.map((ele, idx) => {
              return (
                <TouchableOpacity 
                  key={idx}
                  onPress={() => {
                    this.setState({foodInfo: ele})
                    this.showActionSheet()
                  }}
                >
                    <View style={styles.cardHolder} key={idx} >

                        <View style={styles.bigGrid}>
                            <Text style={styles.gridText}> {ele.food.match(/\d/gi)} </Text>
                            <Text style={styles.gridText}> {ele.food.match(/[a-zA-z]/gi).join('')[0].toUpperCase() + ele.food.match(/[a-zA-z]/gi).join('').slice(1)} </Text>
                        </View>

                        <View style={styles.smallGrid}>
                            <View><Text style={styles.gridText}> {ele.calories.toFixed(2)} </Text></View>
                            <View><Text style={styles.gridText}> {ele.fat.toFixed(2)} </Text></View>
                            <View><Text style={styles.gridText}> {ele.carb.toFixed(2)} </Text></View>
                            <View><Text style={styles.gridText}> {ele.protein.toFixed(2)} </Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
              )
            })}
        </ScrollView>
        
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Favorite'}
          options={['Add To Favorite', 'Cancel']}
          cancelButtonIndex={1}
          destructiveButtonIndex={1}
          onPress={(idx, value) => this.handlePress(idx)}
        />
      </View>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    foods: state.checkFoodReducer.foods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteFood: (foodInfo) => dispatch(actions.addFavoriteFood(foodInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodHistory);
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#5F4B8B',
      fontWeight: 'bold',
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
  GridContainer: {
      flexDirection: 'row',
      height: 40,
      marginBottom: 2,
      borderBottomWidth: 2,
      borderBottomColor: '#ddd',
  },
  bigGrid: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 40,
      marginTop: 2,
      margin: 2,
  },
  smallGrid: {
      flex: 1.2,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: 40,
      alignItems: 'center',
  },
  gridText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600'
  },
  cardContainer: {
      flexDirection: 'column',
      height: 1000,
  },
  cardHolder: {
      flexDirection: 'row',
      height: 45,
      position: 'relative',
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
      marginBottom: 5,
  },
});
