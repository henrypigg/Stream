import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import ArtistInfo from "../components/ArtistInfo";

const ProfileBackground = (props) => (
  <Container>
    <Artist source={props.artist} />
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
  justify-content: flex-end;
`;

const Artist = styled.Image`
  width: 100%;
  height: 100%;
  margin-top: 0;
  position: absolute;
`;

const Overlay = styled.Image`
  position: absolute;
  width: 100%;
  height: 50%;
`;
