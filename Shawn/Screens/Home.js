import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight, onLayout } from 'react-native';
import FBLoginButton from '../Buttons/FBLoginButton';
import { connect } from 'react-redux';
import { Navigator } from 'react-native-navigation';
import { SuperGridSectionList, GridView } from 'react-native-super-grid';
import axios from 'axios';
import ModalDropdown from 'react-native-modal-dropdown';
import Swiper from './Swiper';
import ActionSheet from 'react-native-actionsheet';

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
      options: ['CNN', 'BBC News', 'ESPN', 'Daily Mail', 'The Sports Bible', 'Cancel']
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
    this.ActionSheet.show()
  }

  handlePress = (buttonIndex) => {
    if(buttonIndex < this.state.options.length - 1) {
      this.props.navigator.setTitle({
        title: this.state.options[buttonIndex]
      });
      this.getFeed(this.state.options[buttonIndex].toLowerCase().replace(/\s/gi, '-'));
    }
  }


  getFeed() {
    axios.get('https://newsapi.org/v2/everything?sources=' + this.state.text +'&q=fitness&apiKey=e9e8d764eb2548fc9ae7a1f0a613c9f5&pageSize=5')
      .then((feed) => {
        this.setState({news: feed.data.articles});
      })
      .catch((err) => {
        console.log(err)
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
      <ActionSheet
              ref={o => this.ActionSheet = o}
              title={'News Source'}
              options={this.state.options}
              cancelButtonIndex={this.state.options.length - 1}
              destructiveButtonIndex={this.state.options.length - 1}
              onPress={(idx) => this.handlePress(idx)}
            />
      </View>
    );
  }
}

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
  },
  contentContainer: {
    height: 500,
    paddingVertical: 100,
    paddingLeft: 20,
  },
  textButton: {
    color: 'deepskyblue',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'deepskyblue',
    margin: 2,
  },

  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
  dropdown_2: {
    alignSelf: 'flex-start',
    width: 150,
    marginTop: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_3: {
    width: 150,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: '#000',
    color: '#fff'
  },
  dropdown_3_dropdownTextHighlightStyle: {
    backgroundColor: '#fff',
    color: '#000'
  },
  dropdown_4: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4_dropdown: {
    width: 100,
  },
  dropdown_5: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_6: {
    flex: 1,
    left: 8,
  },
  dropdown_6_image: {
    width: 40,
    height: 40,
  },
  ModalPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 2,
    borderColor: 'red'

  }
});

export default Home;
