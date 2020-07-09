import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const MessageButton = () => (
  <Container>
    <TouchableOpacity>
      <Ionicons name="md-send" size={28} color="#1b1b1b" />
    </TouchableOpacity>
  </Container>
);

export default MessageButton;

const Container = styled.View`
  padding-left: 20px;
`;
