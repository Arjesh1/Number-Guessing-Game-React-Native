import { View, Text, StyleSheet, Alert  } from "react-native"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random()* (max-min))+ min
    if(randomNumber === exclude){
      return generateRandomBetween(min, max, exclude)
    } else {
      return randomNumber
    }
  }

  let minBoundary = 1
  let maxBoundary = 100

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(()=>{
    if(currentGuess === userNumber){
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction){
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess < userNumber)){
      Alert.alert('Don"t lie! You know it"s wrong', [{text: 'Sorry!', style: 'cancel'} ])
      return
    }

    if (direction  === 'lower'){
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandomNumber)
  }

  return (
    <>
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
     <NumberContainer>
      {currentGuess}
     </NumberContainer>
      <View>
        <View style={styles.btnContainer}>
        <PrimaryButton style={styles.btn} onPress={nextGuessHandler.bind(this, 'lower')}>
          <SimpleLineIcons name="minus" size={30} color="white" />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
          <MaterialIcons name="add-circle-outline" size={30} color="white" />
        </PrimaryButton>
        </View>
      </View>
      <View>
        {/* Log rounds */}
      </View>
    </View>
    </>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },

  btnContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  
})
