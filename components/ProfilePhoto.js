import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Animated } from "react-native";
import colorTheme from "../data/colorTheme";

const ProfilePhoto = () => (
  <Container>
    <Background>
      <Avatar source={require("../assets/ProfileFiller/ProfilePhoto.png")} />
    </Background>
  </Container>
);

export default ProfilePhoto;

const Container = styled.View`
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
`;

const Background = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colorTheme.bg};
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.Image`
  height: 90%;
  width: 90%;
  border-radius: 250px;
`;
