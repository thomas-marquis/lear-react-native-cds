import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate("Cdiscount");
  };

  return (
    <View style={styles.container}>
      <Text>Leader Board</Text>
      <Button type="solid" raised onPress={goToCdiscountScreen}>
        Cdiscount
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start"
  }
});
