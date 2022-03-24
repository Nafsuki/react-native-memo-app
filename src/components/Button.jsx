import { string, func } from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel} onPress={onPress}>{label}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
}

Button.defaultProps = {
  onPress: null,
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
})
