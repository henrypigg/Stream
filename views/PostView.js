import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import colorTheme from "../data/colorTheme";

class PostView extends React.Component {
  static navigationOptions = {
    title: "Interact",
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
  };

  render() {
    return (
      <Container>
        <GoLiveWrapper>
          <Gradient source={require("../assets/gradients/Gradient9.png")} />
          <Ionicons name="md-play" size={112} color="#ffffff" />
          <Title>Go Live</Title>
        </GoLiveWrapper>
        <Text>OR POST FROM ...</Text>
        <Wrapper>
          <LeftColumn>
            <CameraWrapper>
              <Gradient source={require("../assets/gradients/Gradient1.png")} />
              <Ionicons name="md-camera" size={72} color="#ffffff" />
              <Title>Camera</Title>
            </CameraWrapper>
            <CameraRollWrapper>
              <Gradient source={require("../assets/gradients/Gradient2.png")} />
              <Ionicons name="md-photos" size={92} color="#ffffff" />
              <Title>Camera Roll</Title>
            </CameraRollWrapper>
          </LeftColumn>
          <RightColumn>
            <VideoWrapper>
              <Gradient source={require("../assets/gradients/Gradient8.png")} />
              <Ionicons name="ios-videocam" size={92} color="#ffffff" />
              <Title>Video</Title>
            </VideoWrapper>
            <AudioWrapper>
              <Gradient source={require("../assets/gradients/Gradient5.png")} />
              <Ionicons name="md-musical-notes" size={72} color="#ffffff" />
              <Title>Audio</Title>
            </AudioWrapper>
          </RightColumn>
        </Wrapper>
      </Container>
    );
  }
}

export default PostView;

const Container = styled.View`
  background-color: ${colorTheme.bg};
  flex: 1;
`;

const Text = styled.Text`
  font-size: 20px;
  margin-left: 5%;
  margin-top: 20px;
  font-weight: 200;
  color: #8b8b8b;
`;

const GoLiveWrapper = styled.View`
  overflow: hidden;
  width: 90%;
  height: 30%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.View`
  width: 90%;
  margin: 5%;
  height: 60%;
  flex-direction: row;
`;

const LeftColumn = styled.View`
  width: 47.5%;
  height: 100%;
  margin-right: 2.5%;
`;

const RightColumn = styled.View`
  width: 47.5%;
  height: 100%;
  margin-left: 2.5%;
`;

const CameraWrapper = styled.View`
  height: 40%;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const CameraRollWrapper = styled.View`
  margin-top: 15px;
  height: 55%;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const VideoWrapper = styled.View`
  height: 55%;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const AudioWrapper = styled.View`
  height: 40%;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Gradient = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 200;
`;
