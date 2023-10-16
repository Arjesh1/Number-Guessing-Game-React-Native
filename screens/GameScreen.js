import { View, Text, StyleSheet  } from "react-native"
import Title from "../components/Title"

const GameScreen = () => {
  return (
    <>
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
      <View>
        <Text>
            Higher or lower?
        </Text>
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
