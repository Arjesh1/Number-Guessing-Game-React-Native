import {Pressable, StyleSheet, Text, View} from 'react-native'

const PrimaryButton = ({children}) => {
  return (
    <>
    <View style={styles.buttonOuterContainer}>
      <Pressable android_ripple={{color: '#663399'}} style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
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
        backgroundColor: '#800080',
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
        backgroundColor: '#9370db'
    }
  
});