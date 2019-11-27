import capitalize from "capitalize";
import React from "react";
import useFetchData from "use-fetch-data";
import { fetchLearderBoard } from "http-client";
import { Platform, FlatList, StyleSheet } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { splitAt } from "ramda";

import Leader from "./Leader";
import Screen from "../Screen";
import { CDISCOUNT } from "../routes";
import { SecondaryContent } from "./styles";
import UserData from "./UserData";

const keyExtractor = ({ id }) => id;

export default function LeaderBoardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };
  const deviceVersion = capitalize(`${Platform.OS} v.${Platform.Version}`);

  const results = useFetchData(fetchLearderBoard, []);

  const [[leaderData], leaderBordData] = splitAt(1, results);

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
      {leaderData && <Leader {...leaderData} />}
      <FlatList
        style={styles.list}
        data={leaderBordData}
        renderItem={props => <UserData {...props} />}
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
