import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types'
import { Feather } from '@expo/vector-icons';

export default function CircleButton({style, name}) {
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
      {/* <Text style={styles.circleButtonLabel}>{children}</Text> */}
    </View>
  )
}

CircleButton.protoTypes = {
  children: string.isRequired,
  style: shape(),
  name: string.isRequired,
}

CircleButton.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8, //Android only boxShadow property
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
})
