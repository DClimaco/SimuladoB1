import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function PaginaInicial() {
  const navigation = useNavigation();

  const goToItem1 = () => {
    navigation.navigate('Item1'); // Navigate to the 'Item1' screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Bem vindo!</Text>
      <Image source={require('../../assets/estus.webp')} style={styles.logo} />
      <View style={styles.secretLinks}>
        <TouchableOpacity style={styles.txt} onPress={goToItem1}>
          <Text style={styles.btnTxt}>Go to Item 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
