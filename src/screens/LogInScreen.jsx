import { useState } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import AppBar from '../components/AppBar'
import Button from '../components/Button'
import firebase from 'firebase'

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlePress = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential
      console.log(user.uid);
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}]
        })
    })
    .catch((error) => {
      Alert.alert(error.code)
      console.log(error.code, error.message);
    })

  }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='Email Address'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize='none'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <Button
          label='Submit'
          onPress={handlePress}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLink}
              onPress={() => {
                navigation.reset({
                index: 0,
                routes: [{name: 'SignUp'}]
                })
              }}
            >Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText:{
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink:{
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
})
