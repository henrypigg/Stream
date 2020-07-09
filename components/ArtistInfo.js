import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ArtistInfo = (props) => (
  <Container>
    <CollapsedView>
      <Ionicons name="md-musical-note" size={28} color="#1b1b1b" />
      <Ionicons name="ios-arrow-back" size={28} color="#1b1b1b" />
    </CollapsedView>
  </Container>
);

export default ArtistInfo;

const Container = styled.View`
  flex: 1;
  position: absolute;
  align-items: flex-end;
`;

const CollapsedView = styled.View`
  background: rgba(255, 255, 255, 0.5);
  height: 280px;
  width: 12%;
  margin-left: 97%;
  align-items: center;
  justify-content: center;
`;
