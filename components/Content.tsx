import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const content = (): React.JSX.Element => {
  return (
    <View style={styles.content}>
        <Text style={styles.text}>Message from App.tsx</Text>
        <Button title="Click Me" />
    </View>
  );
};

export default content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
