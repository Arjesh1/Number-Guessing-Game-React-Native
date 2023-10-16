import {Pressable, StyleSheet, Text, View} from 'react-native'
import Colors from '../constants/colors'

const PrimaryButton = ({children, onPress}) => {
  return (
    <>
    <View style={styles.buttonOuterContainer}>
      <Pressable android_ripple={{color: Colors.primary400}} style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={onPress}>
            <Text style={styles.btnText}>
                {children}
            </Text>
      </Pressable>
    </View>
    </>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 24,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary400,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 16,
        elevation: 2,
    },

    btnText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },

    pressed: {
        backgroundColor: Colors.primary500
    }
  
});