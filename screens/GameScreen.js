import { View, Text, StyleSheet, Alert  } from "react-native"
import Title from "../components/Title"
import { useState } from "react"
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"

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

const GameScreen = ({userNumber}) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

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
        <Text>
            Higher or lower?
        </Text>
        <View style={styles.btnContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
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
  
})
