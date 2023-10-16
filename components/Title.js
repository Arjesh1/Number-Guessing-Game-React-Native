import { StyleSheet, Text } from "react-native"


const Title = ({children}) => {
  return  <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffd700',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ffd700',
    padding: 12,
  }
})