import React from "react";
import { shape } from "prop-types";
import { ListItem } from "react-native-elements";

import { userPropTypes } from "./types";

export default function UserData({ item }) {
  const { name, score, avatar } = item;
  return (
    <ListItem
      leftAvatar={{ source: { uri: avatar } }}
      title={name}
      rightTitle={String(score)}
      bottomDivider
    />
  );
}

UserData.defaultProps = {
  item: null
};

UserData.propTypes = {
  item: shape(userPropTypes)
};
