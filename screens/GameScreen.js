import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions, Dimensions  } from "react-native"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import GuessLogItem from "../components/GuessLogItem"

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
  const[guessedRounds, setGuessedRound] = useState([initialGuess])
  const {width, height} = useWindowDimensions()

  useEffect(()=>{
    if(currentGuess === userNumber){
      onGameOver(guessedRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(()=>{
    minBoundary = 1,
    maxBoundary = 100
  }, [])

  function nextGuessHandler(direction){
    if (
       (direction === 'lower' && currentGuess < userNumber) || 
       (direction === 'higher' && currentGuess > userNumber)
      ) {
         Alert.alert("Don't lie!", " You know it's wrong", [
          { text: 'Sorry!', style: 'cancel' },
         ])
         return;
        }

    if (direction  === 'lower'){
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }

    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandomNumber)
    setGuessedRound(previousGuess => [newRandomNumber, ...previousGuess] )
  }

  const guessedRoundsListLength = guessedRounds.length

  let content = (
    <>
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
    </>
  )

  if(width > 500){
    content = (
      <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <PrimaryButton style={styles.btn} onPress={nextGuessHandler.bind(this, 'lower')}>
          <SimpleLineIcons name="minus" size={30} color="white" />
        </PrimaryButton>
        <NumberContainer>
      {currentGuess}
     </NumberContainer>
     <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
          <MaterialIcons name="add-circle-outline" size={30} color="white" />
        </PrimaryButton>
      </View>
      </>
    )
  }

  return (
    <>
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
     {content}
      <View style={styles.listContainer}>
        {/* {guessedRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList data={guessedRounds} keyExtractor={(item)=> item} renderItem={(itemData)=><GuessLogItem roundNumber={guessedRoundsListLength - itemData.index } guess={itemData.item}/>}>
        </FlatList>
      </View>
    </View>
    </>
  )
}

export default GameScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:  deviceWidth < 380 ? 15: 20,
    alignItems: 'center'
  },

  btnContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  listContainer:{
    flex: 1,
    padding: deviceWidth < 380 ? 12 : 16
  },
  
})
