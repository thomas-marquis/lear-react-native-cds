import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { cond, equals, always, T, compose } from "ramda";

import HomeScreen from "./HomeScreen";
import LeaderBoardNavigator from "./LeaderBoardNavigator";
import GameScreen from "./GameScreen";
import { HOME, LEADER_BOARD, GAME, getRouteNameFromNavigation } from "./routes";

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
        const IconComponent = Ionicons;
        const iconName = compose(
          getIconFromRouteName,
          getRouteNameFromNavigation
        )(navigation);

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
