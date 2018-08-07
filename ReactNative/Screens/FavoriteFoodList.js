import React from 'react';
import { Text, View, Image,StyleSheet, Picker, ScrollView, TouchableOpacity, Alert, Vibration } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Navigator } from 'react-native-navigation';
import Swipeout from 'react-native-swipeout';

class FavoriteFoodList extends React.Component {
    static navigatorButtons = {
        rightButtons: [
          {
            id: 'clear',
            icon: require('../img/Clear.png'),
            disableIconTint: true
          }
        ]
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            foodId: null
        };
    }

    onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'clear') {
                Vibration.vibrate(1);
                Alert.alert(
                    'Alert',
                    'Are you sure to clear this favorite list?',
                    [
                      {text: 'Yes', onPress: () => {
                        this.props.clearList(this.props.userId);
                        this.forceUpdate();
                      }},
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                  )
            }
        }
    }

    deleteFavoriteFood = (foodInfo, foodId, userId) => {
        this.props.removeFavoritedFood(foodInfo, foodId, userId);
        this.forceUpdate();
    };

    render() {
        return (
            <View style={styles.container} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
            <Text style={styles.welcome}>Favorite Foods</Text>
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
  
                {this.props.favoritedFoods.map((ele, idx) => {

                    let swipeoutBtns = [
                        {
                            text: 'Delete',
                            onPress: () => {
                                this.deleteFavoriteFood(ele, idx, this.props.userId)
                            },
                            type: 'delete',
                            key:0,
                        }
                    ]

                    return (
                        <Swipeout right={swipeoutBtns}
                            key={idx}
                            autoClose={true}
                            key={idx}
                            style={{
                                backgroundColor: '#F5FCFF',
                                borderBottomWidth: 2,
                                borderBottomColor: '#ededed',
                                borderTopWidth: 2,
                                borderTopColor: '#ededed',
                            }}
                        >
                            <View style={styles.cardHolder} key={idx} >
    
                                <View style={styles.bigGrid}>
                                    <Text style={styles.gridText}> {ele.quantity} </Text>
                                    <Text style={styles.gridText}> {ele.name} </Text>
                                </View>
    
                                <View style={styles.smallGrid}>
                                    <View><Text style={styles.gridText}> {ele.calories} </Text></View>
                                    <View><Text style={styles.gridText}> {ele.fats} </Text></View>
                                    <View><Text style={styles.gridText}> {ele.carb} </Text></View>
                                    <View><Text style={styles.gridText}> {ele.protein} </Text></View>
                                </View>
                            </View>
                        </Swipeout>
                    )
              })}
            </ScrollView>
        </View>
      );
    }
    
}
    
const mapStateToProps = state => {
    return {
        favoritedFoods: state.favoriteList.favoritedFoods,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFavoritedFood: (foodInfo, foodId, userId) => dispatch(actions.removeFavoritedFood(foodInfo, foodId, userId)),
        clearList: (userId) => dispatch(actions.clearFavoritedFoodList(userId))
    }
}
        
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteFoodList);


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
        height: 50,
        position: 'relative',
        marginBottom: 5,
        alignItems: 'center'
    },
});