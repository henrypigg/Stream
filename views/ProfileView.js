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

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

const MIN_BG_HEIGHT = 280;
const MIN_PROFILE_HEIGHT = 162;
const MAX_PROFILE_HEIGHT = 250;
const PROFILE_SCROLL_DISTANCE = MAX_PROFILE_HEIGHT - MIN_PROFILE_HEIGHT;

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
      inputRange: [0, PROFILE_SCROLL_DISTANCE],
      outputRange: [MAX_PROFILE_HEIGHT, MIN_PROFILE_HEIGHT],
      extrapolate: "clamp",
    });

    return (
      <Container>
        <BackgroundWrapper>
          <ProfileBackground
            gradient={require("../assets/ProfileFiller/Gradient1.png")}
          />
        </BackgroundWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}
        >
          <Wrapper>
            <Username
              style={{
                marginTop: 70,
              }}
            >
              henrypigg
            </Username>
          </Wrapper>
          <ProfilePhoto size={162} />
          <Content
            style={{
              marginTop: 140,
            }}
          >
            <FollowersAndFollowing />
            <EditProfileButton />
            <ProfileTabBar />
            <FavArtists artists={artists} navigation={this.props.navigation} />
            <FavAlbums albums={albums} navigation={this.props.navigation} />
            <FavSongs songs={songs} navigation={this.props.navigation} />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default ProfileView;

const BackgroundWrapper = styled.View`
  width: 100%;
  height: 280;
  position: absolute;
`;

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  align-items: center;
`;

const Username = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: white;
`;

const Content = styled.View`
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #f8f8f8;
`;

const artists = [
  {
    name: "A Boogie Wit da Hoodie",
    image: require("../assets/ProfileFiller/Aboogie.png"),
  },
  {
    name: "Polo G",
    image: require("../assets/ProfileFiller/poloG.png"),
  },
  {
    name: "Lil Tjay",
    image: require("../assets/ProfileFiller/lilTjay.png"),
  },
  {
    name: "Kanye West",
    image: require("../assets/ProfileFiller/KanyeWest.png"),
  },
];

const albums = [
  {
    title: "Kids See Ghosts",
    image: require("../assets/ProfileFiller/KidsSeeGhosts.png"),
    artists: [
      {
        avatar: require("../assets/ProfileFiller/KidCudi.png"),
        name: "Kid Cudi",
      },
      {
        avatar: require("../assets/ProfileFiller/KanyeWest.png"),
        name: "Kanye West",
      },
    ],
  },
  {
    title: "Poop Rap",
    image: require("../assets/ProfileFiller/AcidRap.png"),
    artists: [
      {
        avatar: require("../assets/ProfileFiller/ChanceTheRapper.png"),
        name: "Chance the Rapper",
      },
    ],
  },
];

const songs = [
  {
    title: "Nothin' at All",
    image: require("../assets/ProfileFiller/AmerikkasMostBlunted.png"),
    artists: [
      {
        avatar: require("../assets/ProfileFiller/Trizz.png"),
        name: "Trizz",
      },
      {
        avatar: require("../assets/ProfileFiller/Chuuwee.png"),
        name: "Chuuwee",
      },
    ],
  },
  {
    title: "Walking on a Dream",
    image: require("../assets/ProfileFiller/WalkingOnADream.png"),
    artists: [
      {
        avatar: require("../assets/ProfileFiller/EmpireOfTheSun.png"),
        name: "Empire of the Sun",
      },
    ],
  },
];
