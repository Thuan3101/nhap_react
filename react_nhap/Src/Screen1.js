import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';



function Screen1({navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}
                onPress={() => 
                navigation.navigate('Screen2')}>
            <Text style={styles.tget}>Get Started</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    marginTop: 20,
    height: 55,
    width: 350,
    borderRadius: 35,
    borderWidth: 1,
    backgroundColor: 'red',
  },
  tget:{
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      color: "white",
  },
});

export default Screen1;