import { Text, View, StyleSheet } from "react-native"

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>
            {children}
        </Text>
      
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: 'yellow',
        padding: 16,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'

    },
    numberText:{
        color: 'yellow',
        fontSize: 28,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold'

    },
})
