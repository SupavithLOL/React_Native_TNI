import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { stylesLogin } from '../styles/styles'

const Login = ():React.JSX.Element => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const validateToEmail = (email:string):boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email)
  }

  const handleSubmit = () => {
    let errorMessage="";
    if (!name){
      // Alert.alert("Alert", "Please Enter Name",[{text:"OK"}]);
      // return;
      errorMessage += "Please Enter Name\n";
    }
    if (!email){
      // Alert.alert("Alert", "Please Enter Email",[{text:"OK"}]);
      // return;
      errorMessage += "Please Enter Email\n";
    } else if(!validateToEmail(email)){
      errorMessage += "Invalid Email Format\n"
    }

    if(!password){
      errorMessage += "Please Enter Password\n";
      
    } else if (password.length<6){
      errorMessage += "Password Must Be Atleast 6 Characters\n"
    }

    if(errorMessage){
      Alert.alert("Error", errorMessage.trim(),[{text:"OK"}]);
      return;
    }
    Alert.alert("Alert", "Success",[{text:"OK"}])
  }

  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input} placeholder='Enter your Fullname' value={name} onChangeText={setName}/>
      <TextInput style={stylesLogin.input} placeholder='Enter your Email' value={email} onChangeText={setEmail} />
      <TextInput style={stylesLogin.input} placeholder='Enter your Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
      <Button title='Submit' onPress={handleSubmit}/>
    </View>
  )
}

export default Login