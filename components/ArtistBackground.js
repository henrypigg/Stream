import React from "react";
import styled from "styled-components";

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
  height: 280px;
  align-items: center;
  position: absolute;
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
  height: 100%;
  top: 0;
`;
