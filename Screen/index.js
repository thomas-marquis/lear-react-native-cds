import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

export default function Screen({ children, title }) {
  return (
    <View style={styles.container}>
      <Text h2>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
