import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <>
    <LinearGradient colors={['#4169e1', '#ffd700' ]}style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/dices.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage:{
    opacity: 0.25,
  },
  
});
