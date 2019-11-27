import styled from "styled-components/native";
import { Text } from "react-native-elements";

import { yellow, pinkRed, salmon } from "colors";

export const ClickButton = styled.TouchableHighlight.attrs({
  underlayColor: salmon
})({
  backgroundColor: yellow,
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
});

export const ButtonText = styled(Text).attrs({ h1: true })({
  color: pinkRed
});
