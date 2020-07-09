import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";

const SharePostButtons = (props) => (
  <Container>
    <LikeButton>
      <Ionicons name={"ios-heart"} size={86} color={"#cbcbcb"} />
    </LikeButton>
    <RepostButton>
      <Ionicons name={"ios-repeat"} size={86} color={"#cbcbcb"} />
    </RepostButton>
    <ShareButton>
      <Ionicons name={"ios-share-alt"} size={86} color={"#cbcbcb"} />
    </ShareButton>
  </Container>
);

export default SharePostButtons;

const Container = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const LikeButton = styled.View`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  margin-left: 5%;
  width: 27%;
  height: 100%;
  padding-top: 10px;
  align-items: center;
  justify-content: center;
`;

const RepostButton = styled.View`
  background-color: white;
  border-radius: 15px;
  margin-left: 5%;
  padding-top: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  width: 27%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ShareButton = styled.View`
  background-color: white;
  border-radius: 15px;
  margin-left: 5%;
  padding-top: 5px;
  margin-right: 5%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  width: 27%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
