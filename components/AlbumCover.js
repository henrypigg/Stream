import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const AlbumCover = (props) => (
  <Container>
    <Album source={props.cover} />
    <Overlay source={require("../assets/ReleasesFiller/AlbumOverlay.png")} />
    <Title>{props.name}</Title>
  </Container>
);

export default AlbumCover;

const Container = styled.View`
  width: 184px;
  height: 184px;
  margin: 20px;
  justify-content: flex-end;
`;

const Album = styled.Image`
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
  font-size: 18px;
  margin: 10px;
  font-weight: 800;
`;
