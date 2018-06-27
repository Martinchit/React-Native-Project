import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
// import Styles from '../Style/Style';
import { Navigator } from 'react-native-navigation';
import { SuperGridSectionList, GridView } from 'react-native-super-grid';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };

  }
  render() {
    return (
      <SuperGridSectionList
        itemDimension={130}
        sections={[
          {
            title: 'Beginner Workout Plans',
            data: [
              { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
              { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
              { name: 'WET ASPHALT', code: '#34495e' }
            ]
          },
          {
            title: 'Lifting Workout Plans',
            data: [
              { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' }
            ]
          },
          {
            title: 'About us',
            data: [
              { name: 'Who we are', code: '#95a5a6' },
              { name: 'How to use', code: '#bdc3c7' }, { name: 'Feedback', code: '#7f8c8d' }
            ]
          }
        ]}
        style={styles.gridView}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigator.push({
            screen: 'example.PlanScreen',
            title:  item.key,
            passProps: {
                PlanName: item.key,
                PlanContent:item.key,
                PlanId:item.key,
            },
            backButtonTitle: "Back"
        })}>
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.titleArea}><Text style={styles.titleText}>{section.title}</Text></View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    marginBottom: 10,
    marginTop: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  titleText: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleArea: {
    backgroundColor: '#716B7F',
    height: 30,
    marginTop: -25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});

export default Home;
