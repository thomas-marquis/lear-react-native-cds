import { createStackNavigator } from "react-navigation-stack";

import LeaderBoardScreen from "../LeaderBoardScreen";
import CdiscountScreen from "../CdiscountScreen";

export default createStackNavigator({
  LeaderBoardScreen,
  Cdiscount: CdiscountScreen
});
