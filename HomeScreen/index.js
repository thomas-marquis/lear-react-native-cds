import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import BananaImage from "../assets/Banana-Single.jpg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Bananas click !</Text>
      <Image
        source={BananaImage}
        style={{ height: "40%" }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
