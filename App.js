import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView, Text } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'

export default function App() {
  const [userNumber, setUserNumber]= useState()
  const [gameOver, setGameOver]= useState(true)
  const[guessedRounds, setGuessedRounds] = useState(0)
  

 const [fontsLoaded] =  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const pickedNumberHandler = (pickedNumber) =>{
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  if (!fontsLoaded){
    return <Text>Loading</Text>
  }

  function gameOverHandler(numberOfRounds){
    setGameOver(true)
    setGuessedRounds(numberOfRounds)
  }

  function startNewGameHandler(){
    setGuessedRounds(0)
    setUserNumber(null)


  }

  let screen = <StartGameScreen onConfirmNumber= {pickedNumberHandler}/>
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  } 

  if(gameOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessedRounds} onStartNewGame={startNewGameHandler}/>
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
