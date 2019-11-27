import React from "react";

import CountDown from "./CountDown";
import Screen from "../Screen";
import { ClickButton, ButtonText } from "./styles";

export default function GameScreen() {
  const startTime = Math.floor(Math.random() * 12000);

  return (
    <Screen title="Jouons">
      <CountDown startTime={startTime} onComplete={Function.prototype} />
      <ClickButton onPress={Function.prototype}>
        <ButtonText>Click me!</ButtonText>
      </ClickButton>
    </Screen>
  );
}
