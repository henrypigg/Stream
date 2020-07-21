import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { color } from "react-native-reanimated";
import colorTheme from "../data/colorTheme";

const FollowSubscribeContainer = (props) => (
  <Container>
    <FollowButtonContainer following={props.following}>
      <FollowText following={props.following}>
        {props.following ? "Following" : "Follow"}
      </FollowText>
    </FollowButtonContainer>
    {props.following && (
      <SubscribeButtonContainer following={props.following}>
        <SubscribeText>{props.following ? "Subscribe" : ""}</SubscribeText>
      </SubscribeButtonContainer>
    )}
  </Container>
);

export default FollowSubscribeContainer;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 48px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
`;

const FollowButtonContainer = styled.View`
  width: ${(props) => (props.following ? "42%" : "90%")};
  border-radius: 15px;
  margin-right: ${(props) => (props.following ? "3%" : "0")};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  background-color: ${(props) =>
    props.following ? colorTheme.accentGray : colorTheme.accent};
  align-items: center;
  justify-content: center;
`;

const SubscribeButtonContainer = styled.View`
  width: 42%;
  border-radius: 15px;
  margin-left: 3%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  background-color: #1075b7;
  align-items: center;
  justify-content: center;
`;

const FollowText = styled.Text`
  color: ${(props) =>
    props.following ? colorTheme.mainContent : colorTheme.mainContent};
  font-size: 16px;
  font-weight: 300;
`;

const SubscribeText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 200;
`;
