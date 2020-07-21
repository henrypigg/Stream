import React from "react";
import styled from "styled-components";
import {
  Animated,
  View,
  ListView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FollowersAndFollowing from "../components/FollowersAndFollowing";
import EditProfileButton from "../components/EditProfileButton";
import ProfilePhoto from "../components/ProfilePhoto";
import Avatar from "../components/Avatar";
import FavAlbums from "../components/FavAlbums";
import FavArtists from "../components/FavArtists";
import ProfileBackground from "../components/ProfileBackground";
import ProfileTabBar from "../components/ProfileTabBar";
import FavSongs from "../components/FavSongs";
import { connect } from "react-redux";
import artists from "../data/artists";
import colorTheme from "../data/colorTheme";
import { color } from "react-native-reanimated";

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

const MIN_BG_HEIGHT = 280;
const MAX_BG_HEIGHT = 1000;
const BG_SCROLL_DISTANCE = MIN_BG_HEIGHT - MAX_BG_HEIGHT;

const MIN_PROFILE_HEIGHT = 162;
const MAX_PROFILE_HEIGHT = 250;
const PROFILE_SCROLL_DISTANCE = (MIN_PROFILE_HEIGHT - MAX_PROFILE_HEIGHT) * 4;

const MIN_PROFILE_MARGIN = 290 - MAX_PROFILE_HEIGHT;
const MAX_PROFILE_MARGIN = 290 - MIN_PROFILE_HEIGHT;

const MIN_USERNAME_MARGIN = 60;
const MAX_USERNAME_MARGIN = 144;

class ProfileView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const profileHeight = this.state.scrollY.interpolate({
      inputRange: [PROFILE_SCROLL_DISTANCE, 0],
      outputRange: [MAX_PROFILE_HEIGHT, MIN_PROFILE_HEIGHT],
      extrapolate: "clamp",
    });

    const BGHeight = this.state.scrollY.interpolate({
      inputRange: [BG_SCROLL_DISTANCE, 0],
      outputRange: [MAX_BG_HEIGHT, MIN_BG_HEIGHT],
      extrapolate: "clamp",
    });

    const profileTopMargin = this.state.scrollY.interpolate({
      inputRange: [PROFILE_SCROLL_DISTANCE, 0],
      outputRange: [MIN_PROFILE_MARGIN, MAX_PROFILE_MARGIN],
      extrapolate: "clamp",
    });

    const usernameTopMargin = this.state.scrollY.interpolate({
      inputRange: [PROFILE_SCROLL_DISTANCE, 0],
      outputRange: [MAX_USERNAME_MARGIN, MIN_USERNAME_MARGIN],
      extrapolate: "clamp",
    });

    return (
      <Container>
        <AnimatedContainer style={{ height: BGHeight }}>
          <ProfileBackground
            gradient={require("../assets/gradients/Gradient6.png")}
          />
        </AnimatedContainer>
        <Wrapper>
          <AnimatedUsername
            style={{
              marginTop: usernameTopMargin,
            }}
          >
            henrypigg
          </AnimatedUsername>
        </Wrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}
        >
          <PhotoContainer>
            <AnimatedWrapper
              style={{
                width: profileHeight,
                height: profileHeight,
                borderRadius: profileHeight,
                marginTop: profileTopMargin,
              }}
            >
              <ProfilePhoto />
            </AnimatedWrapper>
          </PhotoContainer>
          <Content
            style={{
              marginTop: 250,
            }}
          >
            <FollowersAndFollowing />
            <EditProfileButton />
            <ProfileTabBar />
            <MyMusic>
              <FavArtists
                artists={favoriteArtists}
                navigation={this.props.navigation}
              />
              <FavAlbums
                albums={favoriteAlbums}
                navigation={this.props.navigation}
              />
              <FavSongs
                songs={favoriteSongs}
                navigation={this.props.navigation}
              />
            </MyMusic>
            <Reposts></Reposts>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ProfileView;

const MyMusic = styled.View``;

const Reposts = styled.View``;

const BackgroundWrapper = styled.View`
  width: 100%;
  position: absolute;
`;

const AnimatedContainer = Animated.createAnimatedComponent(BackgroundWrapper);

const Container = styled.View`
  flex: 1;
  background-color: ${colorTheme.bg};
`;

const Wrapper = styled.View`
  align-items: center;
`;

const PhotoContainer = styled.View`
  flex: 1;
  width: 100%;
  z-index: 1;
  align-items: center;
  position: absolute;
`;

const PhotoWrapper = styled.View`
  overflow: hidden;
  background-color: ${colorTheme.bg};
`;

const AnimatedWrapper = Animated.createAnimatedComponent(PhotoWrapper);

const Username = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: white;
  position: absolute;
`;

const AnimatedUsername = Animated.createAnimatedComponent(Username);

const Content = styled.View`
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: ${colorTheme.bg};
`;

const favoriteArtists = [
  {
    name: artists.ABoogie,
  },
  {
    name: artists.PoloG,
  },
  {
    name: artists.LilTjay,
  },
  {
    name: artists.KanyeWest,
  },
  {
    name: artists.PlayboiCarti,
  },
  {
    name: artists.JuiceWRLD,
  },
  {
    name: artists.CardiB,
  },
];

const favoriteAlbums = [
  {
    title: "Kids See Ghosts",
    image: require("../assets/ProfileFiller/KidsSeeGhosts.png"),
    artists: [
      {
        name: artists.KidCudi,
      },
      {
        name: artists.KanyeWest,
      },
    ],
  },
  {
    title: "Acid Rap",
    image: require("../assets/ProfileFiller/AcidRap.png"),
    artists: [
      {
        name: artists.ChanceTheRapper,
      },
    ],
  },
];

const favoriteSongs = [
  {
    title: "Nothin' at All",
    image: require("../assets/ProfileFiller/AmerikkasMostBlunted.png"),
    artists: [
      {
        name: artists.Trizz,
      },
      {
        name: artists.Chuuwee,
      },
    ],
  },
  {
    title: "Pain 1993",
    image: require("../assets/ProfileFiller/Pain1993.png"),
    artists: [
      {
        name: artists.PlayboiCarti,
      },
    ],
  },
];
