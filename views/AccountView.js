import React from "react";
import { Animated, LayoutAnimation } from "react-native";
import styled from "styled-components";
import ArtistBackground from "../components/ArtistBackground";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ArtistFollowersAndFollowing from "../components/ArtistFollowersAndFollowing";
import FollowSubscribeContainer from "../components/FollowSubscribeContainer";
import ArtistInfo from "../components/ArtistInfo";
import ArtistTabBar from "../components/ArtistTabBar";
import ImagePost from "../components/posts/ImagePost";
import VideoPost from "../components/posts/VideoPost";
import AudioPost from "../components/posts/AudioPost";
import colorTheme from "../data/colorTheme";

const MIN_BG_HEIGHT = 280;
const MAX_BG_HEIGHT = 1000;
const BG_SCROLL_DISTANCE = MIN_BG_HEIGHT - MAX_BG_HEIGHT;

class AccountView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      infoExpanded: false,
    };

    if (Platform.OS == "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  profileTabSwitch = () => {};

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ infoExpanded: !this.state.infoExpanded });
  };

  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const { navigation } = this.props;

    const artist = navigation.getParam("artist");

    const BGHeight = this.state.scrollY.interpolate({
      inputRange: [BG_SCROLL_DISTANCE, 0],
      outputRange: [MAX_BG_HEIGHT, MIN_BG_HEIGHT],
      extrapolate: "clamp",
    });

    const ArtistNameHeight = this.state.scrollY.interpolate({
      inputRange: [BG_SCROLL_DISTANCE, BG_SCROLL_DISTANCE * -0.35],
      outputRange: [MAX_BG_HEIGHT - 30, 0],
      extrapolate: "clamp",
    });

    return (
      <Container>
        <AnimatedWrapper
          style={{ height: ArtistNameHeight, position: "absolute" }}
        >
          <ArtistName infoExpanded={this.state.infoExpanded}>
            {artist.name}
          </ArtistName>
          <AnimatedInfo
            style={{
              width: "100%",
              height: this.state.infoExpanded ? ArtistNameHeight : "70%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: "100%",
              }}
              onPress={this.changeLayout}
            >
              <ArtistInfo infoExpanded={this.state.infoExpanded} />
            </TouchableOpacity>
          </AnimatedInfo>
        </AnimatedWrapper>
        <AnimatedContainer style={{ height: BGHeight }}>
          <ArtistBackground artist={artist.cover} />
        </AnimatedContainer>

        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}
        >
          <Content
            infoExpanded={this.state.infoExpanded}
            style={{ backgroundColor: colorTheme.bg }}
          >
            <ArtistFollowersAndFollowing
              posts={"106"}
              fans={"3.9M"}
              following={"413"}
            />
            <FollowSubscribeContainer following={true} artist={artist} />
            <Bio>
              *+!:)!!{"\n"}whole * ! *:)lotta red **{"\n"}!++ ++** +:) love !
              lit **!++
            </Bio>
            <ArtistTabBar />
            {artist.posts.map((post, index) =>
              post.type == "image" ? (
                <ImagePost
                  key={index}
                  post={post}
                  artist={artist}
                  navigation={this.props.navigation}
                />
              ) : post.type == "video" ? (
                <VideoPost
                  key={index}
                  post={post}
                  artist={artist}
                  navigation={this.props.navigation}
                />
              ) : (
                <AudioPost
                  key={index}
                  post={post}
                  artist={artist}
                  navigation={this.props.navigation}
                />
              )
            )}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default AccountView;

const InfoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
`;

const InfoContainer = styled.View``;

const AnimatedWrapper = Animated.createAnimatedComponent(InfoWrapper);

const AnimatedInfo = Animated.createAnimatedComponent(InfoContainer);

const Container = styled.View`
  flex: 1;
  background-color: ${colorTheme.bg};
`;

const BackgroundWrapper = styled.View`
  width: 100%;
  position: absolute;
`;

const AnimatedContainer = Animated.createAnimatedComponent(BackgroundWrapper);

const Content = styled.View`
  width: 100%;
  z-index: 3;
  border-top-left-radius: ${(props) => (props.infoExpanded ? "0px" : "30px")};
  border-top-right-radius: ${(props) => (props.infoExpanded ? "0px" : "30px")};
  margin-top: 250px;
`;

const ArtistName = styled.Text`
  width: 80%;
  font-size: ${(props) => (props.infoExpanded ? "28px" : "48px")};
  font-weight: 800;
  color: ${(props) => (props.infoExpanded ? "#1b1b1b" : "white")};
  margin-left: ${(props) => (props.infoExpanded ? "38px" : "20px")};
  position: absolute;
  left: 10px;
  z-index: ${(props) => (props.infoExpanded ? "2" : "-100")};
  bottom: ${(props) => (props.infoExpanded ? "170px" : "10px")};
`;

const Bio = styled.Text`
  margin-left: 10%;
  color: ${colorTheme.mainContent};
  font-weight: 300;
`;
