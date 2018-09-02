import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../Style/Style';
import { Data } from '../Data/Data';
import { size } from '../shared/size';
import ImageOverlay from "react-native-image-overlay";

class Exercise extends React.Component {
    static navigatorButtons = {
        leftButtons: [
            {
                id: 'calendar',
                icon: require('../img/Calendar.png'),
                disableIconTint: true
            }
        ],
        rightButtons: [
            {
                id: 'history',
                icon: require('../img/History.png'),
                disableIconTint: true
            }
        ]
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {
            type: null,
            selectedItem: null,
            content: null,
            height: null
        };

    }

    onNavigatorEvent = (event) => {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'history') {
                this.props.navigator.push({
                    screen: 'ExerciseHistoryScreen',
                    title: 'Search History',
                    backButtonTitle: "Back"
                });
            } else if (event.id === 'calendar') {
                this.props.navigator.push({
                    screen: 'CalendarScreen',
                    title: 'Workout Schedule',
                    backButtonTitle: "Back"
                });
            }
        }
    }

    changeType = (item) => {
        this.props.navigator.showModal({
            screen: 'ExerciseContentScreen',
            title: 'Add Exercise',
            backButtonTitle: "Back",
            passProps: {
                cancel: this.cancel,
                selectedItem: item,
                type: this.state.type,
                content: item.content,
            }
        });
    }

    cancel = () => {
        this.props.navigator.dismissModal();
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        const buttons = (
            <View style={{flex: 1,}} onLayout={(event) => {this.setState({height: event.nativeEvent.layout.height})}}>
                <View style={{flex: 1, justifyContent: 'space-around'}}>
                    {Data.map((item, idx) => {
                        var path = idx ? require('../img/Chest.jpeg') : require('../img/Forearm.jpeg');
                        return (
                            <View key={item.id} style={{flex:1}}>
                                <TouchableOpacity key={item.id} onPress={() => this.changeType(item)}>
                                <View style={{alignItems: 'center'}}>
                                    <ImageOverlay
                                        width={size.width}
                                        height={this.state.height/2}
                                        overlayAlpha={0.4}
                                        source={path}
                                        title={item.name}
                                        titleStyle={styles.ExerciseWelcome}
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                        )
                })}
                
                </View>
            </View>
        )

        return (
            <View style={styles.ExerciseContainer}>
                {buttons}
            </View>
        );
    }
}


export default Exercise;