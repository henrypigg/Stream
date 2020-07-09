import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import FeedView from "../views/FeedView";
import ReleasesView from "../views/ReleasesView";
import DiscoverView from "../views/DiscoverView";
import ProfileView from "../views/ProfileView";
import AccountView from "../views/AccountView";

const activeColor = "#1075b7";
const inactiveColor = "#1b1b1b";

const FeedStack = createStackNavigator(
  {
    Feed: FeedView,
    Account: AccountView,
  },
  {
    mode: "modal",
  }
);

FeedStack.navigationOptions = () => {
  return {
    tabBarLabel: " ",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={32}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const ReleasesStack = createStackNavigator(
  {
    Releases: ReleasesView,
    Account: AccountView,
  },
  {
    mode: "modal",
  }
);

ReleasesStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-notifications"
      size={32}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const DiscoverStack = createStackNavigator({
  Discover: DiscoverView,
  Account: AccountView,
});

DiscoverStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-search"
      size={32}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileView,
    Account: AccountView,
  },
  {
    mode: "modal",
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-headset"
      size={32}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator({
  FeedStack,
  ReleasesStack,
  DiscoverStack,
  ProfileStack,
});

export default TabNavigator;
