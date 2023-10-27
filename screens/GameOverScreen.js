import { Image, Text, View, StyleSheet } from "react-native"
import Title from '../components/Title'
import PrimaryButton from "../components/PrimaryButton"


const GameOverScreen = () => {
  return (
    <View style={styles.gameOverContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../assets/images/game_over.jpg')} resizeMode="stretch"/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>x</Text> rounds to guess the number <Text style={styles.highlightText}>y</Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>

    </View>
  )
}

export default GameOverScreen
const styles = StyleSheet.create({
  gameOverContainer:{
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer:{
    width: 300,
    height: 300,
    borderRadius: 150,
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
