import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import FlateListExample from './components/FlateListExample';
import FlatListcallBackend from './components/FlatListcallBackend';
import NewsApp from './components/NewsApp';

export default function App() :React.JSX.Element {

  return (
    <View>
      {/* <FlateListExample/> */}
      {/* <FlatListcallBackend/> */}
      <NewsApp />
    </View>
  );
}

const styles = StyleSheet.create({})
