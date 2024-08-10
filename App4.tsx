import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import ProfileScreen from './components/ProfileScreen';
import Login from './components/Login';

export default function App() :React.JSX.Element {

  return (
    <View style={styles.container}>
      <ProfileScreen/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
