import { Image, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function Item3(){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/item3.webp')} style={styles.logo}/>
            <Text style={styles.txt}>Escudo Grama</Text>
            <Text style={styles.txt}>Ataque:10</Text>
            <Text style={styles.txt}>Defesa:220</Text>
            <Text style={styles.txt}>Descrição: Um escudo leve, não fornece tanta defesa, mas é encantado pra recuperar a estamina do usuário!</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Trocar!</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Item1'}}>Item 1</Link>
                <Link to={{screen: 'Item2'}}>Item 2</Link>
            </View>
        </View>
    )
}