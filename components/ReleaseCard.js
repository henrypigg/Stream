import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Button } from "react-native";
import NotificationButton from "./NotificationButton";
import Avatar from "./Avatar";
import ShareButton from "./ShareButton";
import colorTheme from "../data/colorTheme";

class ReleaseCard extends React.Component {
  render() {
    return (
      <Container>
        <TouchableOpacity>
          <Cover>
            <Art source={this.props.release.art} />
            <Overlay
              source={require("../assets/ReleasesFiller/AlbumOverlay.png")}
            />
            <Title>{this.props.release.title}</Title>
            <Medium>{this.props.release.medium}</Medium>
          </Cover>
        </TouchableOpacity>
        <Content>
          <ButtonWrapper>
            <ShareButton />
            <NotificationButton />
          </ButtonWrapper>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.push("Account", {
                artist: this.props.release.artist,
              });
            }}
          >
            <Avatar image={this.props.release.artist.avatar} size={100} />
          </TouchableOpacity>
          <Artist>{this.props.release.artist.name}</Artist>
        </Content>
      </Container>
    );
  }
}

export default ReleaseCard;

const Container = styled.View`
  height: 75%;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  width: 60%;
  height: 64px;
  margin-left: 10%;
  justify-content: center;
`;

const Cover = styled.View`
  width: 200px;
  height: 200px;
  margin-left: 20px;
  color: white;
  overflow: hidden;
  justify-content: flex-end;
`;

const Art = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Overlay = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  color: white;
  width: 80%;
  margin-left: 10px;
  font-weight: 800;
  font-size: 18px;
`;

const Medium = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Content = styled.View`
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const Artist = styled.Text`
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  text-align: center;
  color: ${colorTheme.mainContent};
`;
