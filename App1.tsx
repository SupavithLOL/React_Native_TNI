import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';

export default function App() :React.JSX.Element {

  const onClickMe = () => {
    Alert.alert('HI','hello React.js');
  }

  const users = [
    { id:1001, name:"John" },
    { id:1002, name:"Mary" }
  ]

  return (
    <View style={styles.container}>
      <AppHeader fullname='Supavith Komkham' text='Message from App.tsx'/>
      {/* <Content message='' onButtonClick={}/> */}
      {/* <Text>Hello React!</Text>
      { 
        users.map((data, index)=>{
          return(
            <Text key={data.id}>
              No. {index+1} ID: {data.id} Name: {data.name}
            </Text>
          )
        }
        
        )

      } */}

      
      <AppFooter footerMessage='Thai-Nichi Institute of Technology'/>
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
