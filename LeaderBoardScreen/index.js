import capitalize from "capitalize";
import React from "react";
import useFetchData from "use-fetch-data";
import { fetchLearderBoard } from "http-client";
import { Platform, FlatList, StyleSheet } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";

import Screen from "../Screen";
import { CDISCOUNT } from "../routes";
import { SecondaryContent } from "./styles";

const renderItem = ({ item }) => {
  const { name, score, avatar } = item;
  return (
    <ListItem
      leftAvatar={{ source: { uri: avatar } }}
      title={name}
      rightTitle={String(score)}
      bottomDivider
    />
  );
};

const keyExtractor = ({ id }) => id;

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };
  const deviceVersion = capitalize(`${Platform.OS} v.${Platform.Version}`);

  const results = useFetchData(fetchLearderBoard, []);

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
      <FlatList
        style={styles.list}
        data={results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%"
  }
});
