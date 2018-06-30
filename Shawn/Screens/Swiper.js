import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, TouchableWithoutFeedback } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import ImageOverlay from "react-native-image-overlay";
import Button from 'apsl-react-native-button';
import { size } from '../shared/size';


const styles = StyleSheet.create({
    slideContainer: {
        height: 500,
        flex: 1,
        justifyContent: 'flex-start'
    },
    slide: {
        padding: 15,
        height: 150,
        flexDirection: 'column',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
    titleText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: '800',
        paddingLeft: 5,
    },
    authorText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'right',
        fontStyle: 'italic',
        paddingRight: 5
    }
});

const Swiper = (props) => (
    <View style={{height: props.height, width: size.width}}>
    <SwipeableViews style={styles.slideContainer}>
        {props.news.map((n, i) => (
            <ImageOverlay
                source={{ uri: n.urlToImage }}
                height={props.height}
                width={size.width}
                key={i}
                >                
                <View style={{width: size.width, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10}}>
                    <Text style={styles.titleText}>{n.title}</Text>
                </View>
                <View style={{width: size.width, justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                    <Text style={styles.authorText}>{n.author}</Text>
                </View>
                <TouchableOpacity 
                    style={{ flex: 1 , justifyContent:'flex-end',alignItems:'flex-end'}}
                >
                </TouchableOpacity>
                <Button onPress={() => {Linking.openURL(n.url)}} style={{borderWidth: 0}} textStyle={{ fontSize: 22, color:'white', fontWeight: '900' }}>
                    Read
                </Button>
            </ImageOverlay>
        ))}
    </SwipeableViews>
    </View>
);

export default Swiper