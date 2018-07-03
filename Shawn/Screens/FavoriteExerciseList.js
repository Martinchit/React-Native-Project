import React from 'react';
import { Text, View, Image,StyleSheet, Picker, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Swipeout from 'react-native-swipeout';

class FavoriteExerciseList extends React.Component {
    static navigatorButtons = {
        rightButtons: [
          {
            id: 'clear1',
            icon: require('../img/Clear.png'),
            disableIconTint: true
          }
        ]
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            exerciseId: null
        }
    }
    onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'clear1') {
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

    deleteFavoriteExercise = (exerciseInfo, exerciseId, userId) => {
        this.props.removeFavoritedExercise(exerciseInfo, exerciseId, userId);
        this.forceUpdate();
    }


  render() {
    return (
      <View style={styles.container} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
      <Text style={styles.welcome}>Exercise Log</Text>
      <View style={styles.GridContainer}>
          <View style={styles.bigGrid}>
              <Text style={styles.gridText}>Name</Text>
          </View>

          <View style={styles.smallGrid}>
              <View><Text style={styles.gridText}>Weight</Text></View>
              <View><Text style={styles.gridText}>Rep</Text></View>
              <View><Text style={styles.gridText}>Set</Text></View>
          </View>
      </View>
        <ScrollView style={styles.cardContainer}>
            {this.props.favoritedExercises.map((e, idx) => {
                let swipeoutBtns = [
                    {
                        text: 'Delete',
                        onPress: () => {
                            this.deleteFavoriteExercise(e, idx, this.props.userId)
                        },
                        type: 'delete',
                        key:0,
                    }
                ]
                return (
                    <Swipeout right={swipeoutBtns}
                        autoClose={true}
                        key={idx}
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
                                <Text style={styles.gridText}> {e.name} </Text>
                            </View>

                            <View style={styles.smallGrid}>
                                <View><Text style={styles.gridText}> {String(e.weight).match(/\d+(\.5)?/gi)[0]} </Text></View>
                                <View><Text style={styles.gridText}> {e.rep} </Text></View>
                                <View><Text style={styles.gridText}> {e.set} </Text></View>
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
    favoritedExercises: state.favoriteList.favoritedExercises,
    userId: state.authReducer.userId
  }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFavoritedExercise: (exerciseInfo, exerciseId, userId) => dispatch(actions.removeFavoritedExercise(exerciseInfo, exerciseId, userId)),
        clearList: (userId) => dispatch(actions.clearFavoritedExerciseList(userId))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteExerciseList);

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
      height: 40,
      marginTop: 2,
      margin: 2,
      justifyContent: 'center',
  },
  smallGrid: {
      flex: 0.7,
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