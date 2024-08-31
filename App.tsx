import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePostScreen from "./screens/CreatePostScreen";

export default function App(): React.JSX.Element {

  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='About' component={AboutScreen}/>
        <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
