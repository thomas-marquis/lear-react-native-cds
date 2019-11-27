import capitalize from "capitalize";
import React from "react";
import { Platform } from "react-native";
import { Button, Text } from "react-native-elements";

import Screen from "../Screen";
import { CDISCOUNT } from "../routes";
import { SecondaryContent } from "./styles";

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };
  const deviceVersion = capitalize(`${Platform.OS} v.${Platform.Version}`);

  return (
    <Screen title="Leader Board">
      <SecondaryContent>
        <Text>{deviceVersion}</Text>
        <Button
          title={CDISCOUNT}
          type="solid"
          raised
          onPress={goToCdiscountScreen}
        />
      </SecondaryContent>
    </Screen>
  );
}
