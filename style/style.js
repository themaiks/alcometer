import { StyleSheet } from 'react-native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';


export default StyleSheet.create({

    alcotext: {
        paddingTop: 20, 
        paddingLeft: 75,
        flex: 1,
        fontSize: 50,
    },    
    TitleText:{
        paddingTop: 40,
        fontSize: 20,
    },
    textinput:{
        height: 40,
        backgroundColor: '#ec8484',
    },
    buttonContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        
    },
    button: {
        width: 50,
        height: 50,
        paddingTop: 5,
        borderWidth: 1,
        borderRadius: 1,
        backgroundColor: '#ec8484',
        
    },
    beerbottles: {
        width: 50,
        height: 50,
        paddingTop: 15,
        paddingLeft: 20,
        borderWidth: 1,
    },
    radiobutton: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
        color: '#ec8484',
        uncheckedColor: '#ec8484',
    },
    radiobutton2: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#ec8484',
    },
    calculatebutton: {
        borderRadius: 1,
        paddingLeft: 80,
        paddingRight: 50,
        alignItems: 'center',
    },
    calcbtn: {
        borderRadius: 1,
        width: 200,
        height: 50,
        paddingTop: 5,
        backgroundColor: '#ec8484',
    },
    calculateText: {
        fontSize: 50,
        paddingBottom: 20,
        textAlign: 'center',
    },
});