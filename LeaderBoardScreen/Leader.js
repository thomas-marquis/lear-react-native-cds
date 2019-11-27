import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { pinkRed, salmon } from "colors";

import { userPropTypes } from "./types";

export default function Leader({ name, avatar, score, id }) {
  return (
    <ListItem
      containerStyle={styles.leader}
      key={id}
      leftAvatar={{ source: { uri: avatar } }}
      title={name}
      subtitle="BEST SCORE!!"
      bottomDivider
      badge={{
        value: score,
        textStyle: { color: "white", fontWeight: "bold" },
        containerStyle: { marginTop: -20 },
        status: "warning"
      }}
      linearGradientProps={{
        colors: [salmon, pinkRed],
        start: [1, 0],
        end: [0.2, 0]
      }}
      ViewComponent={LinearGradient}
    />
  );
}

Leader.defaultProps = {
  avatar: "",
  id: null
};

Leader.propTypes = userPropTypes;

const styles = StyleSheet.create({
  leader: {
    width: "100%"
  }
});
