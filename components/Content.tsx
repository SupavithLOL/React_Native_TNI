import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import {stylesPractice} from '../styles/styles'

interface ContentProps {
  message: string;
  // fullname: string;
  onButtonClick:() => void;
}

const content = ({message, onButtonClick}:ContentProps): React.JSX.Element => {

  /* const [DisplayFullName, setDisplayFullname] = React.useState('');

  const handleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Helo", `Input your fullname : ${fullname}`);
  }; */

  return (
    <View style={stylesPractice.content}>
        <Text style={stylesPractice.text}>{message}</Text>
        {/* <Text style={stylesPractice.text}>{DisplayFullName}</Text> */}
        <Button title="Click Me" onPress={onButtonClick}/>
    </View>
  );
};

export default content;
