import { createStackNavigator } from "react-navigation-stack";
import { cond, T, F, always, equals } from "ramda";

import { CDISCOUNT } from "../routes";
import LeaderBoardScreen from "../LeaderBoardScreen";
import CdiscountScreen from "../CdiscountScreen";

export const getHeaderModeFromRouteName = cond([
  [equals(CDISCOUNT), T],
  [T, F]
]);

export default createStackNavigator(
  {
    LeaderBoardScreen,
    Cdiscount: CdiscountScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerShown: getHeaderModeFromRouteName(navigation.state.routeName)
    })
  }
);
