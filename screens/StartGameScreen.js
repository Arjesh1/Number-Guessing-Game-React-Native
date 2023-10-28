import {TextInput, Text, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Title from '../components/Title'

const StartGameScreen = ({onConfirmNumber}) => {
    const [inputNumber, setInputNumber] = useState('')
    const {width, height} = useWindowDimensions()

    handleOnNumberChange = (enteredValue) =>{
        setInputNumber(enteredValue)
    }

    handleOnNumberConfirm = () =>{
        const chosenNumber = parseInt(inputNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number', 'Number has to be between 1 to 99', [{text: 'Okay', style:'destructive', onPress:()=> setInputNumber('')}] )
            return
        }
        onConfirmNumber(chosenNumber);
    }

    const margnTopDistance =  height < 420 ? 15 : 80
    
  return (
    <ScrollView style={{flex:1}}>
    <KeyboardAvoidingView style={{flex:1}} behavior='position'>
    <View style={[styles.rootContainer, {marginTop: margnTopDistance}]}>
        <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput value={inputNumber} style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect= {false} onChangeText={handleOnNumberChange} />
        <View style={styles.btnGroup}>
            <View style={styles.btnContainer}>
                <PrimaryButton onPress={()=> setInputNumber('')}>Reset</PrimaryButton>
            </View>
            <View style={styles.btnContainer}>
                <PrimaryButton onPress={handleOnNumberConfirm} >Confirm</PrimaryButton>
            </View>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: 'center',
    },

    instructionText:{
        color: 'white',
        fontSize: 24,
        fontFamily:'open-sans',

    },
    inputContainer:{
        padding: 16,
        marginTop: 50,
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
