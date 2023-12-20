import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'
import { useDispatch } from 'react-redux'
import { login } from '../action'

interface Props {
  navigation: any;
  route: any
}

export default function LoginScreen(props: Props) {

  const dispatch: any = useDispatch()

  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeUsername = (text: string) => setUserName(text)

  const onChangePassword = (text: string) => setPassword(text)

  const onPressSubmit = () => {
    let payload = {
      userName,
      password,
      deviceType: "iPhone 11",
      fcmToken: "1234567890",
      ipAddress: "10.10.1.1",
      location: "Gwalior"
    }
    dispatch(login(payload, (data: any) => { }))
  }

  return (
    <SafeAreaView style={styles?.container}>
      <Text style={styles?.heading}>Login</Text>
      <TextInput onChangeText={onChangeUsername} placeholder='Enter UserName' style={styles?.input} />
      <TextInput onChangeText={onChangePassword} placeholder='Enter Password' style={styles?.input} secureTextEntry />
      <TouchableOpacity style={styles?.btn} onPress={onPressSubmit}>
        <Text style={styles?.btnText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.WHITE,
    padding: vw(20),
  },
  heading: {
    fontSize: vw(20),
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors?.BLACK
  },
  input: {
    borderWidth: vw(1),
    borderRadius: vw(10),
    paddingHorizontal: vw(10),
    marginTop: vh(20)
  },
  btn: {
    backgroundColor: colors?.BLACK,
    borderRadius: vw(10),
    marginTop: vh(20),
    width: '100%',
    paddingVertical: vh(10),
    alignItems: 'center'
  },
  btnText: {
    color: colors?.WHITE,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})