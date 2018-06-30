import * as React from 'react';
import { TouchableOpacity, Platform, Text, View, FlatList, Picker, Vibration } from 'react-native';
import { Navigator } from 'react-native-navigation';
import { connect } from 'react-redux';
import Button from 'apsl-react-native-button';
import Styles from '../Style/Style';
import * as actions from '../store/actions/index';

class ExerciseContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseType: this.props.type,
            itemId: this.props.selectedItem.content[0].name,
            weight: 3,
            repetition: 5,
            set: 3
        };
    }

    render() {
        return (
            <View style={Styles.ExerciseContentContainer}>
                <View style={Styles.ExerciseContentFirstPickerArea}>
                    <Text style={Styles.ExerciseContentWelcome}>{this.state.exerciseType} Exercise</Text>
                    <Picker
                        itemStyle={Styles.ExerciseContentTwoPickers}
                        selectedValue={this.state.itemId}
                        onValueChange={(val)=> {
                            this.setState({itemId: val})
                        }}>
                        {this.props.selectedItem.content.map((value, index) => {
                            return <Picker.Item key={index} label={value.name} value={value.name} />
                        })}
                    </Picker>
                </View>
                <View style={Styles.ExerciseContentSecondPickerArea}>
                    <View style={Styles.ExerciseContentGrid}>
                        <Text>Weight(KG)</Text>
                        <Picker
                            itemStyle={Styles.ExerciseContentSmallPicker}
                            selectedValue={this.state.weight}
                            onValueChange={(val)=> {
                                this.setState({weight: val})
                            }}>
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="12.5" value="12.5" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="17.5" value="17.5" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="22.5" value="22.5" />
                            <Picker.Item label="25" value="25" />
                        </Picker>
                    </View>
                    <View style={Styles.ExerciseContentGrid}>
                        <Text>Repetition</Text>
                        <Picker
                            itemStyle={Styles.ExerciseContentSmallPicker}
                            selectedValue={this.state.repetition}
                            onValueChange={(val)=> {
                                this.setState({repetition: val})
                            }}>
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="15" />
                            <Picker.Item label="16" value="16" />
                        </Picker>
                    </View>
                    <View style={Styles.ExerciseContentGrid}>
                        <Text>Session</Text>
                        <Picker
                            itemStyle={Styles.ExerciseContentSmallPicker}
                            selectedValue={this.state.set}
                            onValueChange={(val)=> {
                                this.setState({set: val})
                            }}>
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                        </Picker>
                    </View>
                </View>
                <View style={Styles.ExerciseContentButtonList}>
                    <Button 
                        style={Styles.ExerciseContentBackButton} 
                        textStyle={{fontSize: 18}} 
                        onPress={() => {
                            this.props.cancel()
                        }}
                    >
                        <Text style={{color: 'white'}}>Cancel</Text>
                    </Button>
                    <Button 
                        style={Styles.ExerciseContentCheckButton} 
                        textStyle={{fontSize: 18}} 
                        onPress={() => {
                            Vibration.vibrate(1);
                            this.props.addLog(this.state.itemId, this.state.weight, this.state.repetition, this.state.set)
                        }}
                    >
                        <Text style={{color: 'white'}}>Add</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addLog: (itemId, weight, rep, set) => dispatch(actions.addLog(itemId, weight, rep, set)),
    }
  }
  

export default connect(null, mapDispatchToProps)(ExerciseContent);