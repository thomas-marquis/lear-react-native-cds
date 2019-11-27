import capitalize from "capitalize";
import React from "react";
import useFetchData from "use-fetch-data";
import { fetchLearderBoard } from "http-client";
import {
  Platform,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Button, Text } from "react-native-elements";
import { splitAt } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";
import { pinkRed } from "colors";

import Leader from "./Leader";
import Screen from "../Screen";
import { CDISCOUNT } from "../routes";
import { SecondaryContent } from "./styles";
import UserData from "./UserData";

const keyExtractor = ({ id }) => id;

export default function LeaderBoardScreen({ navigation }) {
  const results = useFetchData(fetchLearderBoard, []);

  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };
  const deviceVersion = capitalize(`${Platform.OS} v.${Platform.Version}`);
  const [[leaderData], leaderBordData] = splitAt(1, results);

  const renderLeaderBoardList = () => (
    <>
      {leaderData && <Leader {...leaderData} />}
      <FlatList
        style={styles.list}
        data={leaderBordData}
        renderItem={props => <UserData {...props} />}
        keyExtractor={keyExtractor}
      />
    </>
  );

  const renderActivityIndicator = () => (
    <ActivityIndicator size="large" color={pinkRed} />
  );

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
      {isNilOrEmpty(results)
        ? renderActivityIndicator()
        : renderLeaderBoardList()}
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%"
  }
});
