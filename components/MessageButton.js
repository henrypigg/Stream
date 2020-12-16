import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colorTheme from "../data/colorTheme";

const MessageButton = () => (
  <Container>
    <TouchableOpacity>
      <Ionicons
        name="ios-paper-plane"
        size={28}
        color={colorTheme.mainContent}
      />
    </TouchableOpacity>
  </Container>
);

export default MessageButton;

const Container = styled.View`
  padding-right: 20px;
`;
