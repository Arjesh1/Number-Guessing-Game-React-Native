import { Image, Text, View, StyleSheet, Dimensions } from "react-native"
import Title from '../components/Title'
import PrimaryButton from "../components/PrimaryButton"


const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.gameOverContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../assets/images/game_over.png')} resizeMode="stretch"/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>

    </View>
  )
}
const deviceWidth = Dimensions.get('window').width

export default GameOverScreen
const styles = StyleSheet.create({
  gameOverContainer:{
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer:{
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth:2,
    borderColor: 'red',
    overflow: 'hidden',
    margin: 36
  },

  img:{
    width: '100%',
    height: '100%',
  },
  summaryText:{
    fontFamily: 'open-sans',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightText:{
    fontFamily: 'open-sans-bold',
    color: '#ffd700',
  }

})
