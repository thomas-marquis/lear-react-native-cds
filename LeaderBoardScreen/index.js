import React from "react";
import { Button } from "react-native-elements";

import { CDISCOUNT } from "../routes";
import Screen from "../Screen";

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };

  return (
    <Screen title="Leader Board">
      <Button
        title={CDISCOUNT}
        type="solid"
        raised
        onPress={goToCdiscountScreen}
      />
    </Screen>
  );
}
