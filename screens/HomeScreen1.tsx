import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {
  const goToAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai Nichi Institute of Technology",
      companyId: 100,
    });
  };

  return (

    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color='pink'/>
      <Text>HomeScreen</Text>
      <Button title="About Us" onPress={goToAbout} />
      <View style={styles.postContainer}>
        <Button title="Create post" onPress={() => navigation.navigate("CreatePost")}/>
        <Text style={styles.postText}>Post: </Text>
        <Text style={styles.postContent}>{route.params?.post}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});
