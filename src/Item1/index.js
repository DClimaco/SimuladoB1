import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function Item1(){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/item1.webp')} style={styles.logo}/>
            <Text style={styles.txt}>Espada do cavaleiro lupino</Text>
            <Text style={styles.txt}>Ataque:200</Text>
            <Text style={styles.txt}>Defesa:15</Text>
            <Text style={styles.txt}>Descrição: Arma perfeita para enfrentar o Vazio</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Trocar!</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Item2'}}>Item 2</Link>
            </View>
        </View>
    )
}