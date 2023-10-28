import { Text, View, StyleSheet } from "react-native"

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.fontFamily}>#{roundNumber}</Text>
        <Text style={styles.fontFamily}> Opponent's guess: {guess}</Text>

    </View>
    
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset:{width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText:{
        fontFamily: 'open-sans'
    }
})
