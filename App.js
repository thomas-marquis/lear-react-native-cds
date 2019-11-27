import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { cond, equals, always, T } from "ramda";

import HomeScreen from "./HomeScreen";
import LeaderBoardNavigator from "./LeaderBoardNavigator";
import GameScreen from "./GameScreen";
import { HOME, LEADER_BOARD, GAME } from "./routes";

export const getIconFromRouteName = cond([
  [equals(HOME), always("md-home")],
  [equals(LEADER_BOARD), always("md-medal")],
  [equals(GAME), always("md-play")],
  [T, always("md-plus")]
]);

const TabNavigator = createBottomTabNavigator(
  {
    [HOME]: HomeScreen,
    [LEADER_BOARD]: LeaderBoardNavigator,
    [GAME]: GameScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        const iconName = getIconFromRouteName(routeName);

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
