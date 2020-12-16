import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import colorTheme from "../data/colorTheme";
import { TouchableOpacity } from "react-native";

const ArtistTabBar = (props) => (
  <Container>
    <Divider />
    <Wrapper>
      <StackedWrapper>
        <Ionicons name="md-menu" size={28} color={colorTheme.mainContent} />
        <SelectedBar />
      </StackedWrapper>
      <GridWrapper>
        <Ionicons name="md-apps" size={28} color={colorTheme.mainContent} />
      </GridWrapper>
    </Wrapper>
    <Divider />
  </Container>
);

export default ArtistTabBar;

const Container = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-content: flex-start;
  height: 48px;
  width: 100%;
`;

const StackedWrapper = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const GridWrapper = styled.View`
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.View`
  height: 0.25px;
  width: 100%;
  background-color: ${colorTheme.mainContent};
`;

const SelectedBar = styled.View`
  position: absolute;
  background-color: ${colorTheme.accent};
  height: 3px;
  width: 100%;
  bottom: 0;
`;
