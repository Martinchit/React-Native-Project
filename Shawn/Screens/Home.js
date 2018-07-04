import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight, onLayout, ActionSheetIOS, Alert } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import { Navigator } from 'react-native-navigation';
import { SuperGridSectionList, GridView } from 'react-native-super-grid';
import axios from 'axios';
import ModalDropdown from 'react-native-modal-dropdown';
import Swiper from './Swiper';

class Home extends React.Component {
  static navigatorButtons = {
    rightButtons: [
      {
        id: 'checkNews',
        icon: require('../img/NewsIcon.png'),
        disableIconTint: true
      }
    ]
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      text: 'cnn',
      news: null,
      height: null,
      options: ['Cancel', 'CNN', 'BBC News', 'Daily Mail', 'The Sports Bible']
    };
  }

  componentWillMount() {
    this.getFeed();
    this.props.navigator.setTitle({
      title: this.state.text.toUpperCase()
    });
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'checkNews') {
        this.showActionSheet();
      }
    }
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: this.state.options,
      cancelButtonIndex: 0,
      title: 'News Source'
    },
    (buttonIndex) => {
        if (buttonIndex > 0) { 
          this.callApi(this.state.options[buttonIndex].toLowerCase().replace(/\s/gi, '-'), this.state.options[buttonIndex]);
        }
    });
  }

  getFeed() {
    axios.get('https://newsapi.org/v2/everything?sources=' + this.state.text +'&q=fitness&apiKey=e9e8d764eb2548fc9ae7a1f0a613c9f5&pageSize=5')
      .then((feed) => {
        this.setState({news: feed.data.articles});
      })
      .catch((err) => {
        console.log(err)
        Alert.alert(
          'Loading Error',
          'Please Select Again',
        )
      })
  }

  callApi(text, title) {
    axios.get('https://newsapi.org/v2/everything?sources=' + text +'&q=fitness&apiKey=e9e8d764eb2548fc9ae7a1f0a613c9f5&pageSize=5')
      .then((feed) => {
        this.props.navigator.setTitle({
          title: title
        });
        this.setState({news: feed.data.articles});
      })
      .catch((err) => {
        aler
      })
  }

  render() {

    return (
      <View style={{flex: 1}} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
        <View style={styles.container}>
          

          {(this.state.news) ?
          <View style={styles.container}>
            <Swiper news={this.state.news} height={this.state.height}/>
          </View> : null}
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    flex: 1,
  }
});