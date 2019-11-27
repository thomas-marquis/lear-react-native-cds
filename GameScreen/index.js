import React from "react";

import Screen from "../Screen";
import { ClickButton, ButtonText } from "./styles";

export default function GameScreen() {
  return (
    <Screen title="Jouons">
      <ClickButton onPress={Function.prototype}>
        <ButtonText>Click me!</ButtonText>
      </ClickButton>
    </Screen>
  );
}
