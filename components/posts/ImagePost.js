import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";
import SharePostButtons from "./SharePostButtons";

const ImagePost = (props) => (
  <Container>
    <ArtistHeader>
      <Avatar image={props.post.avatar} size={48} />
      <ArtistWrapper>
        <Title>{props.post.name}</Title>
        <OnlineTime>Last online {props.post.online} hours ago</OnlineTime>
      </ArtistWrapper>
    </ArtistHeader>
    <Post>
      <Image source={props.post.image} />
      <Overlay
        source={require("../../assets/ProfileFiller/ProfileBackgroundOverlay.png")}
      />
      <Caption>
        <Artist>{props.post.name} </Artist>
        <Content>{props.post.caption}</Content>
      </Caption>
    </Post>
    <FooterWrapper>
      <SharePostButtons />
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
  background-color: #f8f8f8;
`;

const CommentButton = styled.View`
  background-color: white;
  height: 36px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin: 20px;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
`;

const SaySomething = styled.Text`
  padding-left: 10px;
  color: #ababab;
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

const Text = styled.Text``;

const User = styled.Text`
  font-weight: 600;
`;

const Container = styled.View`
  flex: 1;
`;

const ArtistHeader = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

const ArtistWrapper = styled.View`
  margin-left: 10px;
`;

const OnlineTime = styled.Text`
  font-weight: 200;
`;

const Title = styled.Text`
  font-weight: 800;
  font-size: 24px;
  color: #1b1b1b;
`;

const Post = styled.View`
  z-index: -1;
  height: 330px;
  background-color: black;
  justify-content: flex-end;
`;

const Overlay = styled.Image`
  position: absolute;
  width: 100%;
`;

const Image = styled.Image`
  width: 100%;
  position: absolute;
`;

const Artist = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Content = styled.Text`
  font-size: 16px;
  color: white;
`;

const Caption = styled.View`
  flex-direction: row;
  margin: 10px;
  height: 100%;
  align-items: flex-end;
`;
