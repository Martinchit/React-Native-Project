import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    core : {
        flex: 1, 
    },
    profileHeader: {
        textAlign: 'center',
        fontSize: 20,
        color: 'navy',
        width: '100%'
    },
    profileName: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: '900',
        color: '#EDEDED',
        textAlign: 'center'
    },
    profileFacebookBtn: {
        textAlign: 'center',
        width: 30
    },
    profileFoodButton: {
        fontSize: 24,
        fontWeight: '800',
        color: '#EDEDED'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
    },
    loginContent: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginLeft: 30,
        marginBottom: 20
    },
    homeProfilePictureBox: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImageViewBox: {
        position: 'absolute',
        top: 0, 
        left: 0,
        width: '100%',
        height: '100%'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    FoodContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    FoodInputButton: {
        borderWidth: 0,
        marginTop: 5,
        width: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    FoodInstructions: {
        fontSize: 30,
        marginTop: 130,
        marginBottom: 10,
        fontWeight: '900',
        color: '#EDEDED',
    },
    FoodSmallPicker: {
        width: 50,
        height: 88,
        color: '#EDEDED'
    },
    FoodImage: {
        height: 65, 
        width: 65
    },
    ExerciseContentContainer: {
        flex: 1,
        top: 30,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ExerciseContentWelcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#5F4B8B',
    },
    ExerciseContentInstructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    ExerciseContentPicker: {
        height: 10,
        width: 300,
    },
    ExerciseContentSmallPicker: {
        width: 50,
        height: 60,
    },
    ExerciseContentTwoPickers: {
        width: 300,
        height: 88,
    },
    ExerciseContentFirstPickerArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    ExerciseContentSecondPickerArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    ExerciseContentGrid: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ExerciseContentBridge: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    ExerciseContentButtonList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 300,
    },
    ExerciseContentButton: {
        width: 100,
        height: 30,
    },
    ExerciseContentCheckButton: {
        backgroundColor: '#000080',
        borderColor: '#000080',
        marginTop: 5,
        width: 80,
        marginLeft: 3,
        marginRight: 3
    },
    ExerciseContentBackButton: {
        backgroundColor: '#D40909',
        borderColor: '#D40909',
        marginTop: 5,
        width: 80,
        marginLeft: 3,
        marginRight: 3
    },
    ExerciseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    ExerciseWelcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#EDEDED',
        fontWeight: '900', 
    }
});

export default Styles;