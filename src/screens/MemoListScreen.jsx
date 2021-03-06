import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';


export default function MemoListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <MemoList />
      <CircleButton
      name='plus'
      onPress={() => navigation.navigate('MemoCreate')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
