import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Avatar from "../Avatar";
import colorTheme from "../../data/colorTheme";

const SharePostButtons = (props) => (
  <Container>
    <LikeButton>
      <Ionicons name={"ios-heart"} size={36} color={colorTheme.mainContent} />
    </LikeButton>
    <RepostButton>
      <Ionicons name={"ios-repeat"} size={48} color={colorTheme.mainContent} />
    </RepostButton>
    <ShareButton>
      <Ionicons
        name={"ios-share-alt"}
        size={36}
        color={colorTheme.mainContent}
      />
    </ShareButton>
  </Container>
);

export default SharePostButtons;

const Container = styled.View`
  height: 100%;
  flex: 1;
  width: 15%;
  align-items: center;
  justify-content: flex-end;
`;

const LikeButton = styled.View`
  width: 100%;
  height: 36px;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

const RepostButton = styled.View`
  width: 100%;
  height: 36px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const ShareButton = styled.View`
  width: 100%;
  height: 36px;
  align-items: center;
  justify-content: center;
`;
