import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";

const ProfileBackground = (props) => (
  <Container>
    <Gradient source={props.gradient} />
    <Overlay
      source={require("../assets/ProfileFiller/ProfileBackgroundOverlay.png")}
    />
  </Container>
);

export default ProfileBackground;

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
`;

const Gradient = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Overlay = styled.Image`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
`;

const Username = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: white;
  margin-top: 70px;
`;
