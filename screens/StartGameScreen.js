import {TextInput, Text, Pressable, View, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <>
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect= {false} />
        <View style={styles.btnGroup}>
            <View style={styles.btnContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.btnContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    </>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer:{
        padding: 16,
        marginTop: 100,
        marginHorizontal: 20,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset:{width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        backgroundColor: '#4169e1',
        alignItems: 'center',

    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 20,
        textAlign: 'center',
        borderBottomColor: '#ffd700',
        borderBottomWidth: 2,
        color: '#ffd700',
        marginVertical: 8,
        fontWeight: 'bold',
    },

    btnGroup:{
        flexDirection: 'row',
    },
    btnContainer:{
        flex: 1,
    },

  
});
