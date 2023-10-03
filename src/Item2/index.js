import { Image, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function Item2(){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/item2.webp')} style={styles.logo}/>
            <Text style={styles.txt}>Lança do matador de dragões</Text>
            <Text style={styles.txt}>Ataque:350</Text>
            <Text style={styles.txt}>Defesa:9</Text>
            <Text style={styles.txt}>Descrição: Lança do garnde matador de dragões, sua habilidade elétrica é perfeita para perfurar escamas</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Trocar!</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Item1'}}>Item 1</Link>
                <Link to={{screen: 'Item3'}}>Item 3</Link>
            </View>
        </View>
    )
}