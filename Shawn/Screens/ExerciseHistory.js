import React from 'react';
import { Text, View, Image,StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../Style/Style';
import ActionSheet from 'react-native-actionsheet';

class ExerciseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: 'ExerciseHistory'
    };
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  }

  render() {
    return (
      <View style={styles.container}>
                
            </View>
    );
  }
}
  
const mapStateToProps = state => {
  return {
    exerciseLog: state.exerciseLogReducer.exerciseLog
  }
} 
  
export default connect(mapStateToProps)(ExerciseHistory);


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
      fontSize: 18,
  },
  cardContainer: {
      flexDirection: 'column',
      height: 1000,
  },
  cardHolder: {
      flexDirection: 'row',
      height: 40,
      position: 'relative',
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
      marginBottom: 5,
  },
  wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  button: {
      width: 200,
      marginBottom: 10,
      paddingTop: 15,
      paddingBottom: 15,
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#38f'
  }

});