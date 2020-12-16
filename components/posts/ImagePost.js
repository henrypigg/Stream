import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";
import SharePostButtons from "./SharePostButtons";
import colorTheme from "../../data/colorTheme";
import { color } from "react-native-reanimated";

const ImagePost = (props) => (
  <Container>
    <ArtistHeader>
      <Avatar image={props.post.avatar} size={48} />
      <ArtistWrapper>
        <Title>{props.post.name}</Title>
        <OnlineTime>Last online {props.post.online} hours ago</OnlineTime>
      </ArtistWrapper>
    </ArtistHeader>
    <PostWrapper>
      <Post>
        <Image source={props.post.image} />
        <Overlay
          source={require("../../assets/ProfileFiller/ProfileBackgroundOverlay.png")}
        />
        <Caption>
          <Content>
            <Artist>{props.post.name} </Artist>
            {props.post.caption}
          </Content>
        </Caption>
      </Post>
      <SharePostButtons style={{ width: "100%" }} />
    </PostWrapper>
    <FooterWrapper>
      <Comments>
        <ShowAll>Show all {props.post.comments} comments</ShowAll>
        <Comment>
          <User>{props.post.firstUser} </User>
          <Text>{props.post.firstComment}</Text>
        </Comment>
        <Comment>
          <User>{props.post.secondUser} </User>
          <Text>{props.post.secondComment}</Text>
        </Comment>
      </Comments>
      <CommentButton>
        <SaySomething>Say something ...</SaySomething>
      </CommentButton>
    </FooterWrapper>
  </Container>
);

export default ImagePost;

const FooterWrapper = styled.View`
  background-color: ${colorTheme.bg};
  padding-top: 10px;
`;

const CommentButton = styled.View`
  background-color: ${colorTheme.accentGray};
  height: 36px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin: 20px;
  margin-right: 48px;
  margin-top: 10px;
  border-radius: 5px;
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
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Overlay = styled.Image`
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
  margin-left: 10px;
`;

const Content = styled.Text`
  font-size: 16px;
  color: white;
`;

const Caption = styled.View`
  flex-direction: row;
  max-width: 100%;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const PostWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  height: 330px;
`;
