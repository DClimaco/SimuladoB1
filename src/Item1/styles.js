import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#51484F',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '400px',
        height: '400px',
        marginBottom: '0px'
    },
    txt: {
        fontFamily: 'OptimusPrinceps',
        fontSize: '18px',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btn: {
        backgroundColor: '#111111',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'gold',
        fontFamily: 'OptimusPrinceps',
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'right',
        marginTop: '15px'
    }
});

export default styles;