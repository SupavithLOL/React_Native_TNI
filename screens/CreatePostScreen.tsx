import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CreatePostScreen = ({ navigation, route }: any): React.JSX.Element => {
  const [postText, setPostText] = useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="Tell Somthing..."
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button 
        title="Done"
        onPress={() => {
            navigation.navigate({
                name:'Home',
                params:{post:postText},
            });
        }}
      />
    </>
  );
};

export default CreatePostScreen;
