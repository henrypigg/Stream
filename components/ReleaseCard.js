import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Button } from "react-native";
import NotificationButton from "./NotificationButton";
import Avatar from "./Avatar";

class ReleaseCard extends React.Component {
  render() {
    return (
      <Container>
        <TouchableOpacity>
          <Cover>
            <Art source={this.props.art} />
            <Overlay
              source={require("../assets/ReleasesFiller/AlbumOverlay.png")}
            />
            <Title>{this.props.title}</Title>
            <Medium>{this.props.medium}</Medium>
          </Cover>
        </TouchableOpacity>
        <Content>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.push("Account");
            }}
          >
            <Avatar image={this.props.avatar} size={100} />
          </TouchableOpacity>
          <Artist>{this.props.artist}</Artist>
        </Content>
        <ButtonWrapper>
          <NotificationButton />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default ReleaseCard;

const Container = styled.View`
  height: 100%;
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  width: 60px;
  height: 60px;
`;

const Cover = styled.View`
  width: 160px;
  height: 160px;
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
  width: 50%;
`;

const Artist = styled.Text`
  font-size: 12px;
  font-weight: 400;
  width: 100px;
  text-align: center;
`;
