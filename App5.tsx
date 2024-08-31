import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModalExample from "./components/ModalExample";
import WeatherApp from "./components/WeatherApp";
import AboutScreen from "./screens/AboutScreen";

export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <AxiosgetData /> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModalExample/> */}
      {/* <WeatherApp/> */}
      <AboutScreen/>
    </View>
  );
}

const styles = StyleSheet.create({

});
