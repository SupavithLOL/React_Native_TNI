import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Icon, ListItem } from "@rneui/base";

import { useAppSelector } from "../redux-toolkit/hook";
import { selectAuthState } from "../auth/auth-slice";

const MenuScreen = ({ navigation }: any) => {

  const {profile} = useAppSelector(selectAuthState);

  return (
    <View>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: profile?"Welcome, "+profile.name:"",
          style: { color: "#fff" },
        }}
        centerContainerStyle={{}}
        containerStyle={{ width: "100%", height: 200 }}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="center"
        rightContainerStyle={{}}
        statusBarProps={{}}
      />

      <>
        <ListItem bottomDivider onPress={() => {navigation.navigate('Home')}}>
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={() => {navigation.navigate('ProductStack')}}>
          <Icon
            name="star"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;
