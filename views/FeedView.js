import React from "react";
import styled from "styled-components";
import MessageButton from "../components/MessageButton";
import ImagePost from "../components/posts/ImagePost";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import colorTheme from "../data/colorTheme";
import posts from "../data/posts";
import { RefreshControl, ListView } from "react-native";
import Constants from "expo-constants";
import VideoPost from "../components/posts/VideoPost";
import AudioPost from "../components/posts/AudioPost";

const postArray = posts;

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function shuffleArray(array) {
  var i, j, temp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class FeedView extends React.Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
    };
  }

  static navigationOptions = {
    title: "Subscribed",
    headerStyle: {
      shadowColor: "transparent",
      height: 100,
      backgroundColor: colorTheme.bg,
    },
    headerTitleStyle: {
      fontSize: "24",
      fontWeight: "800",
      color: colorTheme.mainContent,
    },
    headerLeft: <MessageButton />,
  };

  PostType = (props) => {
    if (props.post.type == "image") {
      return (
        <ImagePost
          key={index}
          post={post}
          artist={post.artist}
          navigation={this.props.navigation}
        />
      );
    } else if (props.post.type == "video") {
      return (
        <VideoPost
          key={index}
          post={post}
          artist={post.artist}
          navigation={this.props.navigation}
        />
      );
    } else if (props.post.type == "audio") {
      return (
        <AudioPost
          key={index}
          post={post}
          artist={post.artist}
          navigation={this.props.navigation}
        />
      );
    }
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    shuffleArray(postArray);
    this.setState({ refreshing: false });
  }

  render() {
    return (
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={540}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          <Content>
            {postArray.map((post, index) =>
              post.type == "image" ? (
                <ImagePost
                  key={index}
                  post={post}
                  artist={post.artist}
                  navigation={this.props.navigation}
                />
              ) : post.type == "video" ? (
                <VideoPost
                  key={index}
                  post={post}
                  artist={post.artist}
                  navigation={this.props.navigation}
                />
              ) : (
                <AudioPost
                  key={index}
                  post={post}
                  artist={post.artist}
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

export default FeedView;

const Wrapper = styled.View`
  padding-left: 20px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colorTheme.bg};
`;

const Content = styled.View`
  width: 100%;
`;
