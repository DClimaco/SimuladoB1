import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111111',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontFamily: 'OptimusPrinceps',
        fontSize: '50px',
        color: 'gold',
        marginBottom: '50px',
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
        fontFamily: 'OptimusPrinceps'
    },
    logo: {
        width: '400px',
        height: '340px',
    },
    secretLinks:{
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        color: 'green',
    },
});

export default styles;