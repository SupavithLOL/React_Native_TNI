import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profile.jpg");
  const profileImage2 = require("../assets/cat.jpg");
  const [name, setName] = useState("Supavith Komkham");
  const [image, setImage] = useState(profileImage);

  const handleChangeName = () => {
    setName("New Name");
  };

  const handleChangeImage = () => {
    setImage(profileImage2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName}/>
          <Text style={styles.profileName}></Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
