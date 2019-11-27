import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";

import { CDISCOUNT } from "../routes";

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };

  return (
    <View style={styles.container}>
      <Text h2>Leader Board</Text>
      <Button
        title={CDISCOUNT}
        type="solid"
        raised
        onPress={goToCdiscountScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
