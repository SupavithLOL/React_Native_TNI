// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from './screens/MenuScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CreatePostScreen from "./screens/CreatePostScreen";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductScreen from './screens/ProductScreen';

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStackScreen (){
  return(
    <HomeStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerStyle: { backgroundColor: "#20b2aa" },
            // headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            // headerTitleAlign:'center'
          }}
        >
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ title: "หน้าหลัก" }}
          />
          <HomeStack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: "เกี่ยวกับเรา",
              // headerStyle: { backgroundColor: "green" },
              // headerTintColor: "white",
              // headerTitleStyle:{fontWeight:'bold'},
              headerTitleAlign: "center",
            }}
          />
          {/* <HomeStack.Screen name="CreatePost" component={CreatePostScreen} /> */}
        </HomeStack.Navigator>
  )
}

function ProductStackScreen (){
  return(
    <ProductStack.Navigator
          initialRouteName="Product"
          screenOptions={{
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <ProductStack.Screen
            name="Products"
            component={ProductScreen}
          />
        </ProductStack.Navigator>
  )
}

export default function App(): React.JSX.Element {
  const HomeStack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <MenuScreen{...props}/>}>
          <Drawer.Screen name="HomeStack" component={HomeStackScreen}/>
          <Drawer.Screen name="ProductStack" component={ProductStackScreen}/>
        </Drawer.Navigator>
        
      </NavigationContainer>
    </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
