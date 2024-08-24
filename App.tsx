import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";

export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <AxiosgetData /> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
    </View>
  );
}

const styles = StyleSheet.create({

});
