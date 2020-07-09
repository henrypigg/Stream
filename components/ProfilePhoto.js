import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Avatar from "./Avatar";

const ProfilePhoto = (props) => (
  <Container
    style={{
      height: props.size,
      marginTop: 140,
    }}
  >
    <Background
      style={{
        width: props.size,
        borderRadius: props.size / 2,
      }}
    >
      <Avatar
        image={require("../assets/ProfileFiller/ProfilePhoto.png")}
        size={props.size - 30}
      />
    </Background>
  </Container>
);

export default ProfilePhoto;

const Container = styled.View`
  width: 100%;
  z-index: 1;
  position: absolute;
  align-items: center;
`;

const Background = styled.View`
  height: 100%;
  background-color: #f8f8f8;
  align-items: center;
  justify-content: center;
`;
