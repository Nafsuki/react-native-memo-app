import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AppBar from '../components/AppBar'
import CircleButton from '../components/CircleButton'

export default function MemoDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>Shopping List</Text>
        <Text style={styles.memoDate}>2020.Dec.24 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, obcaecati nulla adipisci, quis iusto suscipit delectus soluta ad voluptatum veritatis blanditiis placeat labore itaque? Alias eveniet harum voluptatum dignissimos doloremque.
        </Text>
      </ScrollView>
      <CircleButton
      style={{top: 60, bottom: 'auto'}}
      name='pencil'
      onPress={() => { navigation.navigate('MemoEdit') }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
})
