import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { FeedView } from "../views/FeedView";
import { AccountView } from "../views/AccountView";
import TabNavigator from "./TabNavigator";

export default createAppContainer(TabNavigator);
