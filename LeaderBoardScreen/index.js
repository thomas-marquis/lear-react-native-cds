import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";

import { CDISCOUNT } from "../routes";

const fetchDataOptions = {
  method: "POST"
};
const fetchDatUrl = "";

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };

  useEffect(async () => {
    const response = await fetch(fetchDatUrl, fetchDataOptions);
  });

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
