import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber]= useState()
  const [gameOver, setGameOver]= useState(true)

  const pickedNumberHandler = (pickedNumber) =>{
    setUserNumber(pickedNumber)
    setGameOver(false)
  }

  function gameOverHandler(){
    setGameOver(true)
  }

  let screen = <StartGameScreen onConfirmNumber= {pickedNumberHandler}/>
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  } 

  if(gameOver && userNumber){
    screen = <GameOverScreen/>
  }

  return (
    <>
    <LinearGradient colors={['#4169e1', '#ffd700' ]}style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/dices.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
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
