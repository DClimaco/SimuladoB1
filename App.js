import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PaginaInicial from './src/PaginaInicial';
import Item1 from './src/item1'; 
import Item2 from './src/item2'; 
import Item3 from './src/item3'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='PaginaInicial' component={PaginaInicial} />
        <Stack.Screen name='Item1' component={Item1} />
        <Stack.Screen name='Item2' component={Item2} />
        <Stack.Screen name='Item3' component={Item3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

