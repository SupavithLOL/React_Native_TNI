import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import FlateListExample from './components/FlateListExample';
import FlatListcallBackend from './components/FlatListcallBackend';

export default function App() :React.JSX.Element {

  return (
    <View>
      {/* <FlateListExample/> */}
      <FlatListcallBackend/>
    </View>
  );
}

const styles = StyleSheet.create({})
