import React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity, LayoutAnimation } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const ArtistInfo = (props) => (
  <Container infoExpanded={props.infoExpanded}>
    <CollapsedView>
      <Ionicons name="md-musical-note" size={28} color="#1b1b1b" />
      <Ionicons name="ios-arrow-back" size={28} color="#1b1b1b" />
    </CollapsedView>
    <Content>
      <SongsCard>
        <Ionicons
          name="md-arrow-dropright-circle"
          size={28}
          color="#ffffff"
          style={{
            position: "absolute",
            zIndex: 2,
            alignSelf: "center",
            top: 50,
          }}
        />
        <Song source={require("../assets/ProfileFiller/Pain1993.png")} />
        <SongTitle>Pain 1993 (with Playboi Carti)</SongTitle>
      </SongsCard>
      <InfoCard>
        <Number>17,240,217</Number>
        <Title>Monthly Listeners</Title>
        <Number>213</Number>
        <Title>Songs</Title>
      </InfoCard>
    </Content>
  </Container>
);

export default ArtistInfo;

const Container = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  flex-direction: row;
  align-self: flex-end;
  height: 100%;
  border-bottom-left-radius: ${(props) =>
    props.infoExpanded ? "0px" : "24px"};
  width: ${(props) => (props.infoExpanded ? "100%" : "48px")};
`;

const CollapsedView = styled.View`
  height: 100%;
  width: 48px;
  align-items: flex-start;
  justify-content: center;
  padding-left: 17px;
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

const SongsCard = styled.View`
  width: 130px;
  height: 130px;
  background-color: #1b1b1b;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 0;
`;

const Song = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const InfoCard = styled.View`
  width: 160px;
  height: 130px;
  background-color: #1b1b1b;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px;
  margin-bottom: 20px;
`;

const Number = styled.Text`
  color: white;
  font-size: 19px;
  padding-top: 10px;
  font-weight: 800;
`;

const Title = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 800;
`;

const SongTitle = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 800;
  margin: 10px;
  margin-bottom: 5px;
`;
