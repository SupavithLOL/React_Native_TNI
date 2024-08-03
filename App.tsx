import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import { stylesPractice } from './styles/styles';

export default function App() :React.JSX.Element {

  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage]= useState("Thai-Nichi Institute of technology")

  useEffect(() => {
    console.log("Component has mounted")
  },[]);

  useEffect(() => {
    console.log(`Fullname has changed to: ${fullname}`)
  }, [fullname]);

  useEffect(() => {

  });

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} text={message} />

      <Content message={message} fullname={fullname} />

      <AppFooter footerMessage={footerMessage} />
      <View>
        <TextInput style={stylesPractice.input} placeholder='Enter your fullname' value={fullname} onChangeText={setFullname}/>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
