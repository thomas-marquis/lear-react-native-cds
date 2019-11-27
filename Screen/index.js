import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { node, string } from "prop-types";

function Screen({ children, title }) {
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Screen;
