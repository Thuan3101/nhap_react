import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../Nhap/Src/Screen1';
import Screen2 from '../Nhap/Src/Screen2';

const Stack = createNativeStackNavigator();
 function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
         <Stack.Screen name="Screen2" component={Screen2} /> 
     </Stack.Navigator>
   </NavigationContainer>
    //<Screen1></Screen1>
  );
}
export default App;
