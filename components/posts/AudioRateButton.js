import React from "react";
import styled from "styled-components";
import colorTheme from "../../data/colorTheme";
import { TouchableOpacity } from "react-native";

const AudioRateButton = () => (
  <Container>
    <TouchableOpacity style={{ width: "20%", height: "100%" }}>
      <One />
    </TouchableOpacity>
    <TouchableOpacity style={{ width: "20%", height: "100%" }}>
      <Two />
    </TouchableOpacity>
    <TouchableOpacity style={{ width: "20%", height: "100%" }}>
      <Three />
    </TouchableOpacity>
    <TouchableOpacity style={{ width: "20%", height: "100%" }}>
      <Four />
    </TouchableOpacity>
    <TouchableOpacity style={{ width: "20%", height: "100%" }}>
      <Five />
    </TouchableOpacity>
  </Container>
);

export default AudioRateButton;

const Container = styled.View`
  height: 64px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const One = styled.View`
  height: 100%;
  width: 100%;
  background-color: #1075b7;
`;

const Two = styled.View`
  height: 100%;
  width: 100%;
  background-color: #1075b7;
`;

const Three = styled.View`
  height: 100%;
  width: 100%;
  background-color: #1075b7;
`;

const Four = styled.View`
  height: 100%;
  width: 100%;
  background-color: #1075b7;
`;

const Five = styled.View`
  height: 100%;
  width: 100%;
  background-color: #1075b7;
`;
