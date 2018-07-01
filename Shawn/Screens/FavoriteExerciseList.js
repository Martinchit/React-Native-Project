import React from 'react';
import { Text, View, Image,StyleSheet, Picker, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import * as actions from '../store/actions/index';

class FavoriteExerciseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseId: null
        }
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    handlePress = (buttonIndex) => {
        if (!buttonIndex) {
            this.props.removeFavoritedExercise(this.state.exerciseId);
            this.forceUpdate();
        }
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
              return (
                <TouchableOpacity 
                    key={idx} 
                    onPress={() => {
                        this.setState({exerciseId: idx});
                        this.showActionSheet();
                    }}
                >
                    <View style={styles.cardHolder} key={idx} >

                        <View style={styles.bigGrid}>
                            <Text style={styles.gridText}> {e.exercise} </Text>
                        </View>

                        <View style={styles.smallGrid}>
                            <View><Text style={styles.gridText}> {e.weight} </Text></View>
                            <View><Text style={styles.gridText}> {e.repetition} </Text></View>
                            <View><Text style={styles.gridText}> {e.set} </Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
              )
            })}
        </ScrollView>
        
        <ActionSheet
            ref={o => this.ActionSheet = o}
            title={'Remove Exercise'}
            options={['Remove From Favorite List', 'Cancel']}
            cancelButtonIndex={1}
            destructiveButtonIndex={1}
            onPress={(idx) => this.handlePress(idx)}
        />
      </View>
    );
  }
}
  
const mapStateToProps = state => {
  return {
    favoritedExercises: state.favoriteList.favoritedExercises
  }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFavoritedExercise: (exerciseId) => dispatch(actions.removeFavoritedExercise(exerciseId)) 
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
      height: 45,
      position: 'relative',
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
      marginBottom: 5,
  },
});