import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { stylesLogin } from '../styles/styles'

const Login = () => {


  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input} placeholder='Enter your fullname'/>
      <TextInput style={stylesLogin.input} placeholder='Enter your Email'/>
      <Button title='Submit'/>
    </View>
  )
}

export default Login