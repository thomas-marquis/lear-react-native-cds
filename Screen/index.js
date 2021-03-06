import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { node, string } from "prop-types";

export default function Screen({ children, title }) {
  return (
    <View style={styles.container}>
      {title && <Text h2>{title}</Text>}
      {children}
    </View>
  );
}

Screen.defaultProps = {
  children: null,
  title: ""
};

Screen.propTypes = {
  children: node,
  title: string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight
  }
});
