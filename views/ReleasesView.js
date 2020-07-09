import React from "react";
import styled from "styled-components";
import ReleaseFilter from "../components/ReleaseFilter";
import ReleaseCard from "../components/ReleaseCard";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";

class ReleasesView extends React.Component {
  constructor() {
    super();

    this.state = { expanded: false };

    if (Platform.OS == "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };

  static navigationOptions = {
    title: "Release Dates",
    headerTintColor: "#1075b7",
  };

  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={this.changeLayout}>
            <ReleaseFilter expanded={this.state.expanded} />
          </TouchableOpacity>
          {releases.map((release, index) => (
            <Wrapper key={index}>
              <ReleaseCard
                art={release.art}
                title={release.title}
                avatar={release.avatar}
                artist={release.artist}
                medium={release.medium}
                navigation={this.props.navigation}
              />
            </Wrapper>
          ))}
        </ScrollView>
      </Container>
    );
  }
}

export default ReleasesView;

const Container = styled.View`
  background-color: #f8f8f8;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
`;

const releases = [
  {
    art: require("../assets/ReleasesFiller/rtj4.png"),
    avatar: require("../assets/ReleasesFiller/RunTheJewels.png"),
    artist: "Run the Jewels",
    title: "RTJ4",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/Artist2Deluxe.png"),
    avatar: require("../assets/ReleasesFiller/ABoogie.png"),
    artist: "A Boogie wit da Hoodie",
    title: "Artist 2.0 (Deluxe)",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/bwu2.png"),
    avatar: require("../assets/ReleasesFiller/DizzyWright.png"),
    artist: "Dizzy Wright",
    title: "Blaze With Us 2",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/ImGone.png"),
    avatar: require("../assets/ReleasesFiller/IanDior.png"),
    artist: "Ian Dior",
    title: "I'm Gone",
    medium: "Single",
  },
  {
    art: require("../assets/ReleasesFiller/UngodlyHour.png"),
    avatar: require("../assets/ReleasesFiller/ChloexHalle.png"),
    artist: "Chloe x Halle",
    title: "Ungodly Hour",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/TheAlbum.png"),
    avatar: require("../assets/ReleasesFiller/TeyanaTaylor.png"),
    artist: "Teyana Taylor",
    title: "The Album",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/rtj4.png"),
    avatar: require("../assets/ReleasesFiller/RunTheJewels.png"),
    artist: "Run the Jewels",
    title: "RTJ4",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/Artist2Deluxe.png"),
    avatar: require("../assets/ReleasesFiller/ABoogie.png"),
    artist: "A Boogie wit da Hoodie",
    title: "Artist 2.0 (Deluxe)",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/bwu2.png"),
    avatar: require("../assets/ReleasesFiller/DizzyWright.png"),
    artist: "Dizzy Wright",
    title: "Blaze With Us 2",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/ImGone.png"),
    avatar: require("../assets/ReleasesFiller/IanDior.png"),
    artist: "Ian Dior",
    title: "I'm Gone",
    medium: "Single",
  },
  {
    art: require("../assets/ReleasesFiller/UngodlyHour.png"),
    avatar: require("../assets/ReleasesFiller/ChloexHalle.png"),
    artist: "Chloe x Halle",
    title: "Ungodly Hour",
    medium: "Album",
  },
  {
    art: require("../assets/ReleasesFiller/TheAlbum.png"),
    avatar: require("../assets/ReleasesFiller/TeyanaTaylor.png"),
    artist: "Teyana Taylor",
    title: "The Album",
    medium: "Album",
  },
];
