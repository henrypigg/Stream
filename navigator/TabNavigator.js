import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import FeedView from "../views/FeedView";
import ReleasesView from "../views/ReleasesView";
import DiscoverView from "../views/DiscoverView";
import ProfileView from "../views/ProfileView";
import AccountView from "../views/AccountView";
import PostView from "../views/PostView";
import colorTheme from "../data/colorTheme";

const FeedStack = createStackNavigator({
  Feed: FeedView,
  Account: AccountView,
});

FeedStack.navigationOptions = () => {
  return {
    tabBarLabel: " ",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="md-home"
        size={32}
        color={focused ? colorTheme.accent : colorTheme.mainContent}
      />
    ),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: colorTheme.bg, // TabBar background
        shadowColor: "transparent",
      },
      tabBarStyle: {
        shadowColor: "transparent",
      },
    },
  };
};

const ReleasesStack = createStackNavigator({
  Releases: ReleasesView,
  Account: AccountView,
});

ReleasesStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-notifications"
      size={32}
      color={focused ? colorTheme.accent : colorTheme.mainContent}
    />
  ),
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colorTheme.bg, // TabBar background
      shadowColor: "transparent",
    },
    tabBarStyle: {
      shadowColor: "transparent",
    },
  },
};

const PostStack = createStackNavigator({
  Posts: PostView,
});

PostStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-add"
      size={32}
      color={focused ? colorTheme.accent : colorTheme.mainContent}
    />
  ),
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colorTheme.bg, // TabBar background
      shadowColor: "transparent",
    },
    tabBarStyle: {
      shadowColor: "transparent",
    },
  },
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
      color={focused ? colorTheme.accent : colorTheme.mainContent}
    />
  ),
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colorTheme.bg, // TabBar background
      shadowColor: "transparent",
    },
    tabBarStyle: {
      shadowColor: "transparent",
    },
  },
};

const ProfileStack = createStackNavigator({
  Profile: ProfileView,
  Account: AccountView,
});

ProfileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="md-musical-note"
      size={32}
      color={focused ? colorTheme.accent : colorTheme.mainContent}
    />
  ),
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colorTheme.bg, // TabBar background
      shadowColor: "transparent",
    },
    tabBarStyle: {
      shadowColor: "transparent",
    },
  },
};

const TabNavigator = createBottomTabNavigator({
  FeedStack,
  ReleasesStack,
  PostStack,
  DiscoverStack,
  ProfileStack,
});

export default TabNavigator;
