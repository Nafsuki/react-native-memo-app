import { View, Text, StyleSheet } from 'react-native'
import { string, bool, shape } from 'prop-types'
function Hello({children, bang, style}) {
  // const {children} = props
  return(
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  )
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
}

Hello.defaultProps = {
  bang: false,
  style: null,
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  }
})

export default Hello