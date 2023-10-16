import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <>
    <View style={styles.rootScreen}>
      <StartGameScreen/>
    </View>
      
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ffd700',
    flex: 1,

  },
  
});
