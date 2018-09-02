import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux'

class CalendarScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: {},
        today: new Date().toLocaleDateString().split(/\//gi).reverse().join('-'),
      };
    }
  
    loadItems(day) {
        let obj = this.state.items
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!obj[strTime]) {
                    obj[strTime] = [];
                    this.props.exerciseLog.filter(ele =>  new Date(ele.chosenDate).toISOString().split('T')[0] === strTime).sort((a,b) => new Date(a.chosenDate).getTime() - new Date(b.chosenDate).getTime()).forEach(ele => {
                        obj[strTime].push({
                            time: `${ele.chosenDate.match(/\d+:\d+/gi)[0]}`,
                            exeriseType: ele['exercise'],
                            description: [ { Weight : ele['weight'] + '(KG)' } , { Repetition : ele['repetition'] }, { Set : ele['set'] } ]
                        })
                    })
                }
            }
            const newItems = {};
            Object.keys(obj).forEach(key => {newItems[key] = obj[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
    }
  
    renderItem(item) {
      return (
        <View style={[styles.item, {height: item.height}]}>
            <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 5}}>{item.time}</Text>
            <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 3}}>{item.exeriseType}</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                {
                    item.description.map((ele, idx) => {
                        return <Text key={idx} style={{marginRight: 4}}>{Object.keys(ele)[0]}: {ele[Object.keys(ele)[0]]}</Text>
                    })
                }
            </View>
        </View>
      );
    }
  
    renderEmptyDate() {
      return (
        <View />
      );
    }
  
    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }
  
    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
    
    render() {
    return (
        <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-09-02'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        />
    );
    }
}

const mapStateToProps = state => {
    return {
        exerciseLog: state.exerciseLogReducer.exerciseLog
    }
  }

export default connect(mapStateToProps)(CalendarScreen);



const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});