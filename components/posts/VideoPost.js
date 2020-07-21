import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";
import SharePostButtons from "./SharePostButtons";
import colorTheme from "../../data/colorTheme";
import { color } from "react-native-reanimated";
import posts from "../../data/posts";
import artists from "../../data/artists";

class VideoPost extends React.Component {
  render() {
    return (
      <Container>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push("Account", {
              artist: this.props.artist,
            });
          }}
        >
          <ArtistHeader>
            <Avatar image={this.props.post.avatar} size={48} />
            <ArtistWrapper>
              <Title>{this.props.post.name}</Title>
              <OnlineTime>
                Last online {this.props.post.online} hours ago
              </OnlineTime>
            </ArtistWrapper>
          </ArtistHeader>
        </TouchableOpacity>
        <PostWrapper>
          <Post>
            <Image source={this.props.post.image} />
            <TopOverlay
              source={require("../../assets/ProfileFiller/OverlayTop.png")}
            />
            <Info>
              <Ionicons name={"md-play"} size={28} color={"#ffffff"} />
              <Caption>
                <Artist>{this.props.post.name} </Artist>
                {this.props.post.caption}
              </Caption>
            </Info>
            <TimeBar>
              <ElapsedTime />
              <Length>0:25</Length>
            </TimeBar>
          </Post>
          <SharePostButtons style={{ width: "100%" }} />
        </PostWrapper>
        <FooterWrapper>
          <Comments>
            <ShowAll>Show all {this.props.post.comments} comments</ShowAll>
            <Comment>
              <User>{this.props.post.firstUser} </User>
              <Text>{this.props.post.firstComment}</Text>
            </Comment>
            <Comment>
              <User>{this.props.post.secondUser} </User>
              <Text>{this.props.post.secondComment}</Text>
            </Comment>
          </Comments>
          <CommentButton>
            <SaySomething>Say something ...</SaySomething>
          </CommentButton>
        </FooterWrapper>
      </Container>
    );
  }
}

export default VideoPost;

const FooterWrapper = styled.View`
  background-color: ${colorTheme.bg};
  padding-top: 10px;
`;

const CommentButton = styled.View`
  background-color: ${colorTheme.accentGray};
  height: 36px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin: 20px;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
`;

const SaySomething = styled.Text`
  padding-left: 10px;
  color: #8b8b8b;
  font-weight: 200;
`;

const Comments = styled.View`
  margin-left: 20px;
`;

const Comment = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const ShowAll = styled.Text`
  color: #8b8b8b;
`;

const Text = styled.Text`
  color: ${colorTheme.mainContent};
`;

const User = styled.Text`
  font-weight: 600;
  color: ${colorTheme.mainContent};
`;

const Container = styled.View`
  flex: 1;
  height: 540px;
`;

const ArtistHeader = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colorTheme.bg};
  padding: 10px;
`;

const ArtistWrapper = styled.View`
  margin-left: 10px;
`;

const OnlineTime = styled.Text`
  font-weight: 200;
  color: ${colorTheme.mainContent};
`;

const Title = styled.Text`
  font-weight: 800;
  font-size: 24px;
  color: ${colorTheme.mainContent};
`;

const Post = styled.View`
  z-index: -1;
  height: 100%;
  width: 85%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  justify-content: flex-start;
`;

const TopOverlay = styled.Image`
  position: absolute;
  width: 100%;
  height: 40%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Artist = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: white;
  margin-left: 20px;
  margin-right: 10px;
`;

const Info = styled.View`
  flex-direction: row;
  width: 80%;
  padding: 10px;
  align-items: center;
`;

const Caption = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin-left: 8px;
`;

const PostWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  height: 330px;
`;

const TimeBar = styled.View`
  width: 100%;
  position: absolute;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0px;
  justify-content: center;
`;

const ElapsedTime = styled.View`
  width: 25%;
  height: 100%;
  background-color: ${colorTheme.accent};
`;

const Length = styled.Text`
  position: absolute;
  right: 20px;
  color: #f1f1f1;
`;
